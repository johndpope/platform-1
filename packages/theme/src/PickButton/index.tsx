import { Union } from "../Icons";

export type PickButton = Styleable & {
  icon?: React.ReactNode;
  label: string;
  value: string;
  disabled?: boolean;
  onClick?: () => void;
};

export function PickButton({
  icon,
  label,
  value,
  disabled,
  onClick,
  className
}: PickButton) {
  return (
    <div
      onClick={onClick && !disabled ? onClick : undefined}
      className={classes(
        "bg-brand-amber-2 flex w-fit min-w-[20rem] items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm text-black duration-100 focus:outline-1 focus:outline-black/10",
        disabled ? "opacity-60" : "cursor-pointer hover:bg-[#e4ddbf]",
        className
      )}
    >
      {icon && icon}
      <div className="flex grow select-none flex-col justify-between">
        <p className="text-xs">{label}:</p>
        <p className="text-sm">{value}</p>
      </div>
      <Union />
    </div>
  );
}
