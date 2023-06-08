import { Sandbox } from "~/Sandbox";

import { Providers } from "./Providers";
import { TopBar } from "./TopBar";

export function App() {
  return (
    <Providers>
      <div className="flex h-screen w-screen flex-col">
        <TopBar />
        <Sandbox />
      </div>
    </Providers>
  );
}
