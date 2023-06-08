import * as Auth0 from "@auth0/auth0-react";

import { Callback } from "./Callback";
import { User } from "..";

export declare namespace Login {
  export { Callback };
}

export namespace Login {
  Login.Callback = Callback;

  export function Button() {
    const { loginWithRedirect } = Auth0.useAuth0();
    const onClick = useCallback(
      () =>
        loginWithRedirect({
          appState: { returnTo: window.location.pathname },
          authorizationParams: {
            audience: import.meta.env.VITE_AUTH0_AUDIENCE
          }
        }),
      [loginWithRedirect]
    );
    const { user } = User.use();

    if (!user) {
      return (
        <a
          className="cursor-pointer select-none text-sm font-semibold hover:text-indigo-500"
          onClick={onClick}
        >
          Login
        </a>
      );
    } else {
      return <User.Avatar />;
    }
  }
}
