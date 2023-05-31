import createClient from "openapi-fetch";

import { paths } from "./OpenAPI.generated";

export const { get, post } = createClient<paths>({
  baseUrl: "https://myapi.dev/v1/",
});
