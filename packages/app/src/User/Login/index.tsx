import * as Auth0 from "@auth0/auth0-react";

import { Callback } from "./Callback";

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
            audience: import.meta.env.VITE_AUTH0_AUDIENCE,
          },
        }),
      [loginWithRedirect]
    );

    return <a onClick={onClick}>Login</a>;
  }
}
