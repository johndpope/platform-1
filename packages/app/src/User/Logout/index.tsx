import * as Auth0 from "@auth0/auth0-react";

export function Logout() {
  const { logout } = Auth0.useAuth0();
  logout({ logoutParams: { returnTo: spy(window.location.origin) } });
  return null;
}

export namespace Logout {
  export const url = () => "/logout" as const;
}
