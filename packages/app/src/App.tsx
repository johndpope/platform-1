import { API } from "@stability/sdk";

type Request = API.Paths["/generation/{engine_id}/text-to-image"]["post"];
type RequestBody = Request["requestBody"]["content"]["application/json"];

declare global {
  interface ImportMeta {
    env: {
      VITE_API_KEY?: string;
    };
  }
}

export function App() {
  const [imageURL, setImageURL] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!import.meta.env.VITE_API_KEY) return;

    const request = async () => {
      const body = JSON.stringify({
        text_prompts: [
          {
            text: "An oil painting of a friendly female Rhodesian Ridgeback named Eleanor",
            weight: 1,
          },
        ],
      } satisfies RequestBody);

      const response = await fetch(
        `https://api.stability.ai/v1/generation/stable-diffusion-xl-beta-v2-2-2/text-to-image`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "image/png",
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },

          body,
        }
      );

      const image = await response.blob();
      const url = URL.createObjectURL(image);

      setImageURL(url);
    };

    request();
  }, []);

  return <>{imageURL && <img src={imageURL} />}</>;
}
