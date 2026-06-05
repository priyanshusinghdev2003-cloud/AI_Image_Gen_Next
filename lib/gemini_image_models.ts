export const geminiImageModels = [
  "gemini-3-pro-image",
  "gemini-3.1-flash-image",
  "gemini-2.5-flash-image",
];

export type GeminiImageModel = (typeof geminiImageModels)[number];

export const geminiImageModelLabels: Record<GeminiImageModel, string> = {
  "gemini-3-pro-image": "Gemini 3 Pro Image",
  "gemini-3.1-flash-image": "Gemini 3.1 Flash Image",
  "gemini-2.5-flash-image": "Gemini 2.5 Flash Image",
};
