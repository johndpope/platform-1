import { useClickAway } from "react-use";

export type Select = Styleable & {
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  placeholder?: string;
  title?: string;
  icon?: React.ReactNode;
  options?: Option[];
};

export type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

export function Select({
  value,
  disabled,
  onChange,
  className,
  placeholder,
  title,
  icon,
  options
}: Select) {
  const [open, setOpen] = useState(false);

  const valueLabel = options?.find((option) => option.value === value);

  const ref = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  useClickAway(ref, () => {
    setOpen(false);
  });

  return (
    <>
      <div className="flex flex-col gap-1" ref={ref}>
        {title && <h1 className="select-none text-xs opacity-75">{title}</h1>}
        <div
          className={classes(
            "relative flex max-w-[22rem] items-center gap-2 rounded border px-2 py-1",
            open ? "border-black/30" : "border-zinc-300",
            disabled ? "pointer-events-none opacity-60" : "cursor-pointer",
            className
          )}
          onClick={() => setOpen(!open)}
        >
          {icon && (
            <div className="flex shrink-0 items-center justify-center">
              {icon}
            </div>
          )}
          <div className="flex-grow">
            <p
              ref={labelRef}
              className={classes(
                "select-none text-sm",
                value ? "text-black" : "text-zinc-300"
              )}
            >
              {valueLabel?.label || placeholder}
            </p>
          </div>
          <div className="flex-shrink-0">
            <svg
              className={classes(
                "h-4 w-4",
                open ? "text-black" : "text-zinc-300"
              )}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M6 9l6 6 6-6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {open && (
            <div className="z-100 pointer-events-auto absolute left-0 right-0 top-full">
              <div className="bg-brand-amber-1 flex flex-col overflow-hidden rounded border border-zinc-300">
                {options?.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => {
                      onChange?.(option.value);
                      setOpen(false);
                    }}
                    className={classes(
                      "flex h-6 select-none items-center justify-between text-sm",
                      value === option.value
                        ? "bg-[#B69FFE]"
                        : "hover:bg-[#D1D5DB]",

                      option.disabled
                        ? "pointer-events-none opacity-60"
                        : "cursor-pointer"
                    )}
                    style={{
                      // get how far left from the ref the labelRef is
                      paddingLeft:
                        (labelRef.current?.getBoundingClientRect().left ?? 0) -
                        (ref.current?.getBoundingClientRect().left ?? 0)
                    }}
                  >
                    <p>{option.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
