import type { paths as Paths } from "./OpenAPI.generated";

type BaseURL = string;

type TextToImageRequest =
  Paths["/generation/{engine_id}/text-to-image"]["post"];

export type TextToImageEngineID = string;

export type TextToImageRequestPath =
  `${BaseURL}/generation/${TextToImageEngineID}/text-to-image`;

export type TextToImageRequestHeaders =
  TextToImageRequest["parameters"]["header"];

export type TextToImageRequestBody =
  TextToImageRequest["requestBody"]["content"]["application/json"];

export type TextToImageResponseBody =
  TextToImageRequest["responses"][200]["content"]["application/json"];
