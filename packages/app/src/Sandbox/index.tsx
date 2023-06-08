import { Button } from "~/Theme";
import { Code, Languages } from "./Code";
import * as TextToImageSandbox from "./TextToImage";

export function Sandbox({ apiKey }: { apiKey?: string }) {
  const [showCode, setShowCode] = useState<boolean>(false);
  const [codeLanguage, setCodeLanguage] = useState<Languages>("typescript");
  const [options, setOptions] = useState<any>({});

  const code = useMemo(() => {
    const code = TextToImageSandbox.examples[codeLanguage]
      .trim()
      .replace("{apiKey}", apiKey ?? "YOUR API KEY");

    // replace {VALUE} with the value from the options object
    return Object.entries(options).reduce((acc, [key, value]) => {
      return acc.replace(`{${key}}`, `${value}`);
    }, code);
  }, [codeLanguage, apiKey, options]);

  return (
    <div className="flex h-full w-full flex-col gap-6 overflow-y-auto p-6">
      <div className="flex grow gap-6">
        {showCode && (
          <Code
            content={code}
            language={codeLanguage}
            setLanguage={setCodeLanguage}
          />
        )}
        <TextToImageSandbox.TextToImage
          apiKey={apiKey}
          setOptions={setOptions}
        />
      </div>
      <div className="flex gap-6">
        <Button onClick={() => setShowCode(!showCode)}>
          {showCode ? "Hide" : "Show"} code
        </Button>
        <Button onClick={() => setShowCode(!showCode)}>View on github</Button>
      </div>
    </div>
  );
}
