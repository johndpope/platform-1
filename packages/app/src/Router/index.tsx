import * as ReactRouter from "react-router-dom";

import { Sandbox } from "~/Sandbox";
import { User } from "~/User";

export function Router() {
  return ReactRouter.useRoutes([
    {
      path: "/",
      element: <Sandbox />,
    },
    {
      path: User.Logout.url(),
      element: <User.Logout />,
    },
    {
      path: User.Login.Callback.url(),
      element: <User.Login.Callback />,
    },
  ]);
}

export namespace Router {
  export const useNavigate = ReactRouter.useNavigate;
  export const useLocation = ReactRouter.useLocation;

  export const Provider = ReactRouter.BrowserRouter;
}
