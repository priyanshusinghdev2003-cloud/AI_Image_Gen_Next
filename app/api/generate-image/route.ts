import {
  countGenerationsSince,
  createGeneration,
  utcMonthStart,
} from "@/db/generations";
import { getMonthlyGenerationLimit } from "@/lib/generation-quota";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import sharp from "sharp";
import { generateImage } from "ai";
import * as Sentry from "@sentry/nextjs";
import { ai } from "@/lib/gemini";
import { ACCEPTED_SOURCE_IMAGE_MIME_TYPES } from "@/lib/constants";
import { geminiImageModels } from "@/lib/gemini_image_models";
import { getStylePreset } from "@/lib/style.presets";

import { uploadBufferToImageKit } from "@/lib/imagekit";

export const runtime = "nodejs";

type GenerateImageRequest = {
  sourceImageUrl?: string;
  sourceMimeType?: string;
  originalFileName?: string;
  styleSlug?: string;
  model?: string;
};

async function inferGeminiAspectRatio(
  imageBuffer: Buffer,
): Promise<"1:1" | "4:3" | "3:4"> {
  try {
    const metadata = await sharp(imageBuffer).metadata();

    if (!metadata.width || !metadata.height) {
      return "1:1";
    }

    const aspectRatio = metadata.width / metadata.height;
    if (aspectRatio > 1.08) return "4:3";
    if (aspectRatio < 0.92) return "3:4";
    return "1:1";
  } catch {
    return "1:1";
  }
}

export async function POST(request: Request) {
  const { userId, has } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const monthlyLimit = getMonthlyGenerationLimit(has);
  const usedThisMonth = await countGenerationsSince(userId, utcMonthStart());

  if (usedThisMonth >= monthlyLimit) {
    Sentry.logger.warn("generation.quota_exceeded", {
      limit: monthlyLimit,
      used: usedThisMonth,
    });

    return NextResponse.json(
      {
        error: `Monthly generation limit reached (${monthlyLimit} images). Upgrade your plan or try again next month.`,
        code: "QUOTA_EXCEEDED" as const,
        limit: monthlyLimit,
        used: usedThisMonth,
      },
      { status: 429 },
    );
  }

  if (!ai) {
    return NextResponse.json(
      { error: "Missing GEMINI_API_KEY." },
      { status: 500 },
    );
  }

  const body = (await request.json()) as GenerateImageRequest;

  const { model, originalFileName, sourceImageUrl, sourceMimeType, styleSlug } =
    body;

  if (!sourceImageUrl) {
    return NextResponse.json(
      { error: "Please upload an image first." },
      { status: 400 },
    );
  }

  if (
    typeof sourceMimeType !== "string" ||
    !ACCEPTED_SOURCE_IMAGE_MIME_TYPES.has(sourceMimeType)
  ) {
    return NextResponse.json(
      { error: "Only JPG, PNG, and WEBP files are supported." },
      { status: 400 },
    );
  }

  if (typeof styleSlug !== "string") {
    return NextResponse.json(
      { error: "Please choose a style." },
      { status: 400 },
    );
  }

  if (!model) {
    return NextResponse.json(
      { error: "Please choose a model." },
      { status: 400 },
    );
  }

  if (!geminiImageModels.includes(model)) {
    return NextResponse.json(
      { error: "Selected Gemini model is not available for image generation." },
      { status: 400 },
    );
  }

  const preset = getStylePreset(styleSlug);
  if (!preset) {
    return NextResponse.json(
      { error: "Unknown style preset." },
      { status: 400 },
    );
  }

  const imageResponse = await fetch(sourceImageUrl);
  if (!imageResponse.ok) {
    return NextResponse.json(
      { error: "Could not fetch the uploaded source image." },
      { status: 404 },
    );
  }

  const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());
  const imageAspectRatio = await inferGeminiAspectRatio(imageBuffer);

  const prompt = [
    preset.prompt,
    "Do not add extra people, extra limbs, duplicate subjects, or change the overall camera angle.",
  ].join("\n\n");

  try {
    const result = await Sentry.startSpan(
      {
        name: `image generate ${model}`,
        op: "gen_ai.request",
        attributes: {
          "gen_ai.request.model": model,
          "gen_ai.operation.name": "request",
          "gen_ai.request.messages": JSON.stringify([
            { role: "user", content: prompt },
          ]),
        },
      },
      async (span) => {
        console.log("imageAspectRatio:", imageAspectRatio);
        const out = await generateImage({
          model,
          prompt: {
            images: [imageBuffer],
            text: prompt,
          },
          size:
            imageAspectRatio === "1:1"
              ? "1024x1024"
              : imageAspectRatio === "4:3"
                ? "1536x1024"
                : "1024x1536",
          providerOptions: {
            google: {
              imageGeneration: {
                imageAspectRatio,
              },
            },
          },
        });

        span.setAttribute(
          "gen_ai.response.text",
          JSON.stringify([
            "[image/png generated; pixel data not sent to Sentry]",
          ]),
        );

        const u = out.usage;

        if (u.inputTokens != null) {
          span.setAttribute("gen_ai.usage.input_tokens", u.inputTokens);
        }

        if (u.outputTokens != null) {
          span.setAttribute("gen_ai.usage.output_tokens", u.outputTokens);
        }
        if (u.totalTokens != null) {
          span.setAttribute("gen_ai.usage.total_tokens", u.totalTokens);
        }

        span.setAttribute(
          "gen_ai.response.text",
          JSON.stringify([
            "[image/png generated; pixel data not sent to Sentry]",
          ]),
        );

        return out;
      },
    );

    const imageBase64 = result.image.base64;

    if (!imageBase64) {
      throw new Error("The model did not return an image.");
    }

    const resultBuffer = Buffer.from(imageBase64, "base64");

    const { url: resultImageUrl } = await uploadBufferToImageKit({
      buffer: resultBuffer,
      fileName: `${preset.slug}-result.png`,
      folder: `/users/${userId}/results`,
      mimeType: "image/png",
    });

    const savedGeneration = await createGeneration({
      clerkUserId: userId,
      originalFileName:
        typeof originalFileName === "string" ? originalFileName : null,
      sourceImageUrl,
      resultImageUrl,
      styleSlug: preset.slug,
      styleLabel: preset.label,
      model,
      promptUsed: prompt,
    });

    Sentry.logger.info("generation.completed", {
      generationId: savedGeneration.id,
      styleSlug: preset.slug,
      model,
    });

    return NextResponse.json({
      imageBase64,
      mimeType: "image/png",
      promptUsed: prompt,
      style: { slug: preset.slug, label: preset.label },
      model,
      savedGeneration,
    });
  } catch (error) {
    console.error("generate-image route failed", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Image generation failed. Please try again.",
      },
      { status: 500 },
    );
  }
}
