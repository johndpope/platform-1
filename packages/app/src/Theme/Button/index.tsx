import { Link } from "../Icons";

export type Button = StyleableWithChildren & {
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  link?: string;
};

export function Button({
  children,
  active,
  disabled,
  onClick,
  className,
  variant,
  link
}: Button) {
  return (
    <button
      disabled={disabled}
      onClick={link && !onClick ? () => window.open(link, "_blank") : onClick}
      className={classes(
        active && "hover",
        "h-fit min-w-[20rem] grow-0 rounded-lg p-2.5 text-sm text-white duration-100 focus:outline-1 focus:outline-black/10",
        variant === "primary"
          ? "bg-brand-orange/90"
          : "bg-brand-amber-1 text-black",
        disabled
          ? "opacity-60"
          : variant === "primary"
          ? "hover:bg-brand-orange"
          : "hover:bg-brand-amber-2",
        link && "flex items-center justify-between gap-2 text-left",
        className
      )}
    >
      {children}
      {link && <Link color={variant === "primary" ? "white" : undefined} />}
    </button>
  );
}
