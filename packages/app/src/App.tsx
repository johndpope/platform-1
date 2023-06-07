import { Topbar } from "./Topbar";

export function App() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Topbar />
      <iframe
        src="https://codesandbox.io/p/github/Stability-AI/platform/main?file=/packages/sandbox-text-to-image/src/TextToImage/index.tsx:15,1"
        title="Stability-AI/platform"
        className="h-full w-full"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    </div>
  );
}
