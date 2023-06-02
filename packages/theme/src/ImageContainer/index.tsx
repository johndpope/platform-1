export type ImageContainer = StyleableWithChildren & {
  title?: string;
  src?: string;
};

export function ImageContainer({
  title,
  src,
  children,
  className
}: ImageContainer) {
  return (
    <div
      className={classes(
        "flex h-fit w-fit flex-col gap-2 rounded-lg bg-white p-3",
        className
      )}
    >
      {title && <p className="text-sm">{title}</p>}
      {src ? (
        <img className="aspect-square w-80 rounded object-cover" src={src} />
      ) : (
        <div className="h-80 w-80 rounded border border-zinc-300 bg-gray-50"></div>
      )}
      {children && <div className="flex">{children}</div>}
    </div>
  );
}
