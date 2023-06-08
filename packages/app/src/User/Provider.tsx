import * as Auth0 from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import { User } from "~/User";

export function Provider({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();
  const onRedirect = React.useCallback(
    (appState?: Auth0.AppState) =>
      navigate(appState?.returnTo ?? window.location.pathname),
    [navigate]
  );

  return (
    <Auth0.Auth0Provider
      useRefreshTokens
      cacheLocation="localstorage"
      onRedirectCallback={onRedirect}
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        redirect_uri: `${window.location.origin}${User.Login.Callback.url()}`,
      }}
    >
      <ErrorInterceptor>{children}</ErrorInterceptor>
    </Auth0.Auth0Provider>
  );
}

function ErrorInterceptor({ children }: React.PropsWithChildren) {
  const { error } = Auth0.useAuth0();

  useEffect(() => {
    if (!error || isIgnorableError(error)) return;
    console.error(error);
  }, [error]);

  return <>{children}</>;
}

function isIgnorableError(error: unknown) {
  return (
    error instanceof Auth0.OAuthError &&
    (error.error === "login_required" || error.error === "cancelled")
  );
}
