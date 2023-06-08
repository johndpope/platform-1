import { Sandbox } from "./Sandbox";
import { Topbar } from "./Topbar";

declare global {
  interface ImportMeta {
    env: {
      VITE_API_KEY?: string;
    };
  }
}

export function App() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Topbar />
      <Sandbox apiKey={import.meta.env.VITE_API_KEY} />
    </div>
  );
}
