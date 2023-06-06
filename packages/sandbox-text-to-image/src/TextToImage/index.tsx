import {
  Background,
  ImageContainer,
  PickButton,
  Textarea,
} from "@stability/theme";

export type TextToImage = { apiKey: string };
export function TextToImage({ apiKey }: TextToImage) {
  apiKey;

  return (
    <div className="h-screen w-screen">
      <Background title="Text-to-image" className="h-full w-full">
        <div className="flex">
          <div className="flex w-fit flex-col gap-3">
            <Textarea
              autoFocus
              color="positive"
              title="Positive prompt"
              placeholder="Description of what you want to generate"
            />
            <Textarea
              color="negative"
              title="Negative prompt"
              placeholder="What you want to avoid generating"
            />
            <PickButton
              label="Model"
              value="StableDiffusion XL"
              onClick={() => console.log("Clicked!")}
            />
            <PickButton
              label="Style"
              value="Enhance"
              onClick={() => console.log("Clicked!")}
            />
            <PickButton
              value="Advanced Settings"
              onClick={() => console.log("Clicked!")}
            />
          </div>
          <div className="flex items-center justify-center md:w-[75%]">
            <ImageContainer title="Output image" />
          </div>
        </div>
      </Background>
    </div>
  );
}
