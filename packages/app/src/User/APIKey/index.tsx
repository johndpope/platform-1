export * from "./APIKeys";

export type APIKey = {
  key: string;
  created: Date;
};

export namespace APIKey {
  export const obscure = (apiKey: APIKey) =>
    apiKey.key.slice(0, 6) +
    apiKey.key.slice(6, -3).replace(/./g, "*") +
    apiKey.key.slice(-3);
}
