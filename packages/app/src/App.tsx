import { Topbar } from "./Topbar";

export function App() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Topbar />
      <iframe
        src="https://codesandbox.io/embed/github/stability-ai/platform/tree/main/?fontsize=14&theme=dark"
        title="Stability-AI/platform"
        className="h-full w-full"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    </div>
  );
}
