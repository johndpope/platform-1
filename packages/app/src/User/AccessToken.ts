import { useAuth0 } from "@auth0/auth0-react";

export type AccessToken = string;
export namespace AccessToken {
  export const use = (): AccessToken | undefined => {
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();
    const [accessToken, setAccessToken] = useState<AccessToken | undefined>();

    useEffect(() => {
      if (!isAuthenticated) return;
      let isCancelled = false;

      (async () => {
        try {
          const accessToken = await getAccessTokenSilently();
          if (!isCancelled) setAccessToken(accessToken);
        } catch (error) {
          console.error(error);
        }
      })();

      return () => {
        isCancelled = true;
      };
    }, [getAccessTokenSilently, isAuthenticated]);

    return accessToken;
  };

  export function useOrLogin() {
    const { logout, isAuthenticated, loginWithRedirect } = useAuth0();
    const accessToken = use();

    return useCallback(async () => {
      isAuthenticated &&
        logout({ logoutParams: { returnTo: window.location.origin } });

      return accessToken ?? (await loginWithRedirect());
    }, [accessToken, isAuthenticated, loginWithRedirect, logout]);
  }
}
