export const geminiImageModels = ["gemini-1.5-flash", "gemini-1.5-pro"];

export type GeminiImageModel = (typeof geminiImageModels)[number];

export const geminiImageModelLabels: Record<GeminiImageModel, string> = {
  "gemini-1.5-flash": "Gemini 1.5 Flash",
  "gemini-1.5-pro": "Gemini 1.5 Pro",
};  