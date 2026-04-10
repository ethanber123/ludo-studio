export const openaiImageModels = ["gpt-image-1", "gpt-image-1.5"];

export type OpenAiImageModel = (typeof openaiImageModels)[number];

export const openAiImageModelLabels: Record<OpenAiImageModel, string> = {
  "gpt-image-1": "GPT Image 1",
  "gpt-image-1.5": "GPT Image 1.5",
};
