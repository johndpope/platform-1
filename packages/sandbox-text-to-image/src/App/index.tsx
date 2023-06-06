import { TextToImage } from "~/TextToImage";

declare global {
  interface ImportMeta {
    env: {
      VITE_API_KEY?: string;
    };
  }
}

export function App() {
  return <TextToImage apiKey={import.meta.env.VITE_API_KEY} />;
}
