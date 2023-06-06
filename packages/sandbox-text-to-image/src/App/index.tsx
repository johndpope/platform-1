import { Page } from "~/Page";

declare global {
  interface ImportMeta {
    env: {
      VITE_API_KEY?: string;
    };
  }
}

export function App() {
  return <Page apiKey={import.meta.env.VITE_API_KEY} />;
}
