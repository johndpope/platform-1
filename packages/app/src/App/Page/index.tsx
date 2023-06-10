import { TopBar } from "../TopBar";

export function Page({
  children,
  className,
  noScroll
}: StyleableWithChildren & {
  noScroll?: boolean;
}) {
  return (
    <div
      className={classes(
        "relative z-0 flex flex-col",
        noScroll && "h-screen w-screen"
      )}
    >
      <TopBar />
      {children}
    </div>
  );
}
