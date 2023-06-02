export type Textarea = Styleable & {
  value?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  onChange?: (value: string) => void;
  placeholder?: string;
  title?: string;
  color?: "positive" | "negative" | "neutral";
};

export function Textarea({
  value,
  disabled,
  autoFocus,
  onChange,
  className,
  placeholder,
  title,
  color
}: Textarea) {
  return (
    <div className="flex flex-col gap-2">
      {(title || color) && (
        <div className="flex items-center gap-2">
          {color && (
            <div
              className={classes(
                "aspect-square h-2.5 w-2.5 rounded-full",
                color === "positive" && "bg-brand-positive",
                color === "negative" && "bg-brand-negative",
                color === "neutral" && "bg-brand-gray-4"
              )}
            />
          )}
          {title && <p className="text-sm">{title}</p>}
        </div>
      )}
      <textarea
        autoFocus={autoFocus}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={classes(
          "bg-brand-amber-2 min-h-[8rem] max-w-[22rem] resize-none rounded-lg p-3 text-sm focus:outline-1 focus:outline-black/10",
          disabled && "opacity-60",
          className
        )}
      />
    </div>
  );
}
