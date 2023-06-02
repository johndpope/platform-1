export function Background({ className, children }: StyleableWithChildren) {
  return (
    <div
      className={classes(
        "bg-brand-amber-2 h-fit w-fit rounded-xl p-3",
        className
      )}
    >
      {children}
    </div>
  );
}
