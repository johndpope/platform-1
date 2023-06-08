import * as ReactQuery from "@tanstack/react-query";

import { Remote } from "~/Remote";

export const Provider = ({ children }: React.PropsWithChildren) => (
  <ReactQuery.QueryClientProvider
    client={useMemo(() => Remote.Client.create(), [])}
  >
    {children}
  </ReactQuery.QueryClientProvider>
);
