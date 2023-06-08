export const typescript = `
import { OpenAPI } from "@stability/sdk";

const options = {
  method: "POST",
  headers: {
    Accept: "image/png",
    Authorization: "Bearer {apiKey}"
  } satisfies OpenAPI.TextToImageRequestHeaders,
  body: JSON.stringify({
    height: {height},
    width: {width},
    cfg_scale: {cfgScale},
    seed: {seed},
    steps: {steps},
    style_preset: "{style}",
    text_prompts: [
      {
        text: "{positivePrompt}",
        weight: 1,
      },
      {
        text: "{negativePrompt}",
        weight: -1,
      }
    ]
  } satisfies OpenAPI.TextToImageRequestBody)
};

fetch(
  "https://api.stability.ai/v1/generation/{engineId}/text-to-image" satisfies OpenAPI.TextToImageRequestPath,
  options
)
  .then(response => response.blob())
  .then(response => URL.createObjectURL(response))
  .then(url => console.log(url))
  .catch(err => console.error(err));
`;

export const javascript = `
const options = {
  method: "POST",
  headers: {
    Accept: "image/png",
    "content-type": "application/json",
    Authorization: "Bearer {apiKey}"
  },
  body: JSON.stringify({
    height: {height},
    width: {width},
    cfg_scale: {cfgScale},
    seed: {seed},
    steps: {steps},
    style_preset: "{style}",
    text_prompts: [
      {
        text: "{positivePrompt}",
        weight: 1,
      },
      {
        text: "{negativePrompt}",
        weight: -1,
      }
    ]
  })
};

fetch("https://api.stability.ai/v1/generation/{engineId}/text-to-image", options)
  .then(response => response.blob())
  .then(response => URL.createObjectURL(response))
  .then(url => console.log(url))
  .catch(err => console.error(err));
`;

export const python = `
import requests

body = {
  "text_prompts": [
    {
      "text": "{positivePrompt}",
      "weight": 1,
    },
    {
      "text": "{negativePrompt}",
      "weight": -1,
    }
  ],
  "style_preset": "{style}",
  "height": {height},
  "width": {width},
  "cfg_scale": {cfgScale},
  "seed": {seed},
  "steps": {steps},
}

response = requests.post(
  "https://api.stability.ai/v1/generation/{engineId}/text-to-image",
  headers={
    "Content-Type": "application/json",
    "Accept": "image/png",
    "Authorization": "Bearer {apiKey}",
  },
  json=body,
)

image = response.content

# save image to file
with open("image.png", "wb") as f:
  f.write(image)
`;
