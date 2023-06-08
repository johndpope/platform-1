import { OpenAPI } from "@stability/sdk";

export async function request(
  apiKey: string,
  engineId: string,
  positivePrompt: string,
  negativePrompt?: string,
  style?: OpenAPI.TextToImageRequestBody["style_preset"],
  height?: OpenAPI.TextToImageRequestBody["height"],
  width?: OpenAPI.TextToImageRequestBody["width"],
  cfgScale?: OpenAPI.TextToImageRequestBody["cfg_scale"],
  seed?: OpenAPI.TextToImageRequestBody["seed"],
  steps?: OpenAPI.TextToImageRequestBody["steps"]
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
    samples: 1,
    height,
    width,
    cfg_scale: cfgScale,
    seed,
    steps,
  } satisfies OpenAPI.TextToImageRequestBody);

  const response = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }/v1/generation/${engineId}/text-to-image` satisfies OpenAPI.TextToImageRequestPath,
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
