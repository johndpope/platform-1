import * as ReactRouter from "react-router-dom";
import { Page } from "~/App/Page";
import { Overview } from "~/Overview";

import { Sandbox } from "~/Sandbox";
import { User } from "~/User";

import { TextToImage } from "../Sandbox/TextToImage";

export function Router() {
  return ReactRouter.useRoutes([
    {
      path: "/",
      element: (
        <Page>
          <Overview />
        </Page>
      )
    },
    {
      path: "/sandbox",
      element: (
        <Page noScroll>
          <Sandbox
            SandboxButtons={TextToImage.Buttons}
            SandboxComponent={TextToImage}
            samples={TextToImage.Samples}
          />
        </Page>
      ),
      children: [
        {
          path: "/sandbox/text-to-image",
          element: (
            <Page noScroll>
              <Sandbox
                SandboxButtons={TextToImage.Buttons}
                SandboxComponent={TextToImage}
                samples={TextToImage.Samples}
              />
            </Page>
          )
        }
      ]
    },
    {
      path: User.Logout.url(),
      element: <User.Logout />
    },
    {
      path: User.Login.Callback.url(),
      element: <User.Login.Callback />
    }
  ]);
}

export namespace Router {
  export const useNavigate = ReactRouter.useNavigate;
  export const useLocation = ReactRouter.useLocation;

  export const Provider = ReactRouter.BrowserRouter;
}
