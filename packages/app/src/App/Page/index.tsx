import { TopBar, height } from "../TopBar";

export function Page({
  children,
  className,
  noScroll
}: StyleableWithChildren & {
  noScroll?: boolean;
}) {
  return (
    <div
      className={classes("z-0 w-full", className)}
      style={noScroll ? { height: `calc(100vh - ${height()})` } : undefined}
    >
      <TopBar />
      {children}
    </div>
  );
}
