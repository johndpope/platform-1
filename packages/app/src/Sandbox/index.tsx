import { Button } from "~/Theme";
import { User } from "~/User";

import { Code, Languages } from "./Code";

export function Sandbox({
  SandboxComponent,
  SandboxButtons,
  samples
}: {
  SandboxComponent: React.FC<{
    setOptions: (options: any) => void;
  }>;
  SandboxButtons: React.FC;
  samples: Record<Languages, string>;
}) {
  const apiKey = User.APIKey.use();

  const [showCode, setShowCode] = useState(true);
  const [codeLanguage, setCodeLanguage] = useState<Languages>("typescript");
  const [options, setOptions] = useState<any>({});

  const code = useMemo(() => {
    const code = samples[codeLanguage]
      .trim()
      .replace("{apiKey}", "YOUR API KEY");

    // replace {VALUE} with the value from the options object
    return Object.entries(options).reduce((acc, [key, value]) => {
      return acc.replace(`{${key}}`, `${value}`);
    }, code);
  }, [codeLanguage, apiKey, options]);

  return (
    <div className="flex h-full max-h-full min-h-0 grow flex-col gap-6 p-6">
      <div className="flex min-h-0 grow gap-6">
        {showCode && (
          <Code
            content={code}
            language={codeLanguage}
            setLanguage={setCodeLanguage}
            onClose={() => setShowCode(false)}
          />
        )}
        <SandboxComponent setOptions={setOptions} />
      </div>
      <div className="flex min-h-0 shrink-0 gap-6">
        <Button onClick={() => setShowCode(!showCode)}>
          {showCode ? "Hide" : "Show"} Code
        </Button>
        <SandboxButtons />
      </div>
    </div>
  );
}
