import { Sandbox } from "./Sandbox";
import { Topbar } from "./Topbar";

export function App() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Topbar />
      <Sandbox />
    </div>
  );
}
