export type Button = {
  text: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export function Button({ text, active, disabled, onClick, className }: Button) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classes(
        active && "hover",
        "rounded px-3 py-1 duration-100 hover:bg-[#b84317]",
        disabled && "opacity-60",
        className
      )}
    >
      {text}
    </button>
  );
}
