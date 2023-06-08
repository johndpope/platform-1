import SyntaxHighlighter from "react-syntax-highlighter";

// theme styles
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export type Languages = "python" | "javascript" | "typescript";

export function Code({
  content,
  language,
  setLanguage
}: {
  content: string;
  language: Languages;
  setLanguage: (language: Languages) => void;
}) {
  return (
    <div
      className="flex w-full max-w-[40%] flex-col overflow-hidden overflow-x-auto rounded-xl bg-[#2b2b2b]"
      style={a11yDark}
    >
      <div className="flex w-full gap-3 p-3">
        <LanguageButton
          language="Typescript"
          onClick={() => setLanguage("typescript")}
          active={language === "typescript"}
        />
        <LanguageButton
          language="Javascript"
          onClick={() => setLanguage("javascript")}
          active={language === "javascript"}
        />
        <LanguageButton
          language="Python"
          onClick={() => setLanguage("python")}
          active={language === "python"}
        />
      </div>
      <SyntaxHighlighter
        language={language}
        showLineNumbers
        style={a11yDark}
        customStyle={{
          width: "100%",
          height: "100%"
        }}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
}

function LanguageButton({
  language,
  onClick,
  active
}: {
  language: string;
  onClick: () => void;
  active: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={classes(
        "rounded border border-transparent px-2 py-1 text-sm text-white duration-100",
        active ? "bg-white text-black" : "hover:border-zinc-400"
      )}
    >
      {language}
    </button>
  );
}
