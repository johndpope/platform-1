import { TextToImage } from "./TextToImage";

declare global {
  interface ImportMeta {
    env: {
      VITE_API_KEY?: string;
    };
  }
}

export function Sandbox() {
  return <TextToImage apiKey={import.meta.env.VITE_API_KEY} />;
}
