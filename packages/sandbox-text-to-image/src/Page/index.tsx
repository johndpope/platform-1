import { Background } from "@stability/theme";

export type Page = {
  apiKey: string;
};

export function Page({ apiKey }: Page) {
  return (
    <Background title="test">
      <div className="bg-red-500">hello world</div>
    </Background>
  );
}
