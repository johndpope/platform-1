import createClient from "openapi-fetch";

import { paths } from "./OpenAPI.generated";

export const { get, post } = createClient<paths>({
  baseUrl: "https://myapi.dev/v1/",
});

export type TextToImage = paths["/generation/{engine_id}/text-to-image"];
export type TextToImageBody =
  TextToImage["post"]["requestBody"]["content"]["application/json"];
