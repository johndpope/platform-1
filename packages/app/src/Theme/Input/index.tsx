export type Input = Styleable & {
  value?: string | number;
  disabled?: boolean;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
  onNumberChange?: (value: number) => void;
  placeholder?: string;
  title?: string;
  icon?: React.ReactNode;
  percentage?: boolean;
  number?: boolean;
};

export function Input({
  value,
  disabled,
  autoFocus,
  onChange,
  onNumberChange,
  className,
  placeholder,
  title,
  icon,
  percentage,
  number
}: Input) {
  const [focused, setFocused] = useState(false);
  const [width, setWidth] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [localValue, setLocalValue] = useState<string>(value?.toString() ?? "");

  useLayoutEffect(() => {
    if (percentage) {
      // calculate scrollWidth of value
      const tempSpan = document.createElement("span");
      tempSpan.style.position = "absolute";
      tempSpan.style.visibility = "hidden";
      tempSpan.style.whiteSpace = "pre";
      tempSpan.style.fontSize = inputRef.current
        ? window.getComputedStyle(inputRef.current).fontSize
        : "0.875rem";
      tempSpan.innerHTML = `${value}`
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      document.body.appendChild(tempSpan);
      setWidth(tempSpan.getBoundingClientRect().width);
      document.body.removeChild(tempSpan);
    }
  }, [value]);

  return (
    <div className="flex flex-col gap-1">
      {title && <h1 className="select-none text-xs opacity-75">{title}</h1>}
      <div
        className={classes(
          "flex max-w-[22rem] items-center gap-2 rounded border px-2 py-1",
          focused ? "border-black/30" : "border-zinc-300",
          disabled ? "pointer-events-none opacity-60" : "cursor-text",
          className
        )}
        onClick={() => !disabled && inputRef.current?.focus()}
      >
        {icon && (
          <div className="flex shrink-0 items-center justify-center">
            {icon}
          </div>
        )}
        <div className="flex max-w-full grow">
          <input
            ref={inputRef}
            autoFocus={autoFocus}
            disabled={disabled}
            placeholder={placeholder}
            value={localValue}
            onChange={(e) => {
              setLocalValue(e.target.value);
            }}
            style={
              percentage
                ? {
                    maxWidth: `${width}px`
                  }
                : undefined
            }
            onFocus={() => {
              setFocused(true);

              if (number) {
                inputRef.current?.setSelectionRange(
                  0,
                  inputRef.current.value.length
                );
              }
            }}
            onBlur={() => {
              setFocused(false);
              if (number) {
                // strip out all non-numeric characters
                const numericValue = inputRef.current?.value.replace(
                  /[^0-9.]/g,
                  ""
                );

                const number = parseFloat(numericValue ?? "0");
                if (!isNaN(number)) {
                  onNumberChange?.(number);
                  setLocalValue(number.toString());
                } else {
                  setLocalValue("0");
                  onNumberChange?.(0);
                }
              } else {
                onChange?.(localValue);
              }
            }}
            className={classes(
              "m-0 min-w-0 max-w-full grow bg-transparent p-0 text-sm focus:outline-none"
            )}
          />
          {percentage && <p className="select-none text-sm opacity-50">%</p>}
        </div>
      </div>
    </div>
  );
}
