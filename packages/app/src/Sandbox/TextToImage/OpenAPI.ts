import { OpenAPI } from "@stability/sdk";

export async function request(
  apiKey: string,
  engineId: string,
  positivePrompt: string,
  negativePrompt?: string,
  style?: OpenAPI.TextToImageRequestBody["style_preset"]
) {
  const prompts = [
    {
      text: positivePrompt,
      weight: 1,
    },
  ];

  if (negativePrompt) {
    prompts.push({
      text: negativePrompt,
      weight: -1,
    });
  }

  const body = JSON.stringify({
    text_prompts: prompts,
    style_preset: style,
  } satisfies OpenAPI.TextToImageRequestBody);

  const response = await fetch(
    `https://api.stability.ai/v1/generation/${engineId}/text-to-image` satisfies OpenAPI.TextToImageRequestPath,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "image/png",
        Authorization: `Bearer ${apiKey}`,
      },

      body,
    }
  );

  const image = await response.blob();
  const url = URL.createObjectURL(image);

  return url;
}