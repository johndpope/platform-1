export type Background = StyleableWithChildren & {
  title?: string;
};

export function Background({ className, children, title }: Background) {
  return (
    <div
      className={classes(
        "bg-brand-amber-1 flex h-fit w-fit flex-col rounded-xl",
        className
      )}
    >
      {title && (
        <div className="border-b border-zinc-300 p-3 text-lg">{title}</div>
      )}
      <div className="h-full min-h-0 p-3">{children}</div>
    </div>
  );
}
