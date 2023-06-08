import { IdToken as Auth0IdentityToken, useAuth0 } from "@auth0/auth0-react";

export type IdentityToken = Auth0IdentityToken;
export namespace IdentityToken {
  export const use = (): IdentityToken | undefined => {
    const { getIdTokenClaims, isAuthenticated } = useAuth0();
    const [idToken, setIdToken] = useState<IdentityToken | undefined>(
      undefined
    );

    useEffect(() => {
      if (!isAuthenticated) return;
      let isCancelled = false;

      (async () => {
        try {
          const idTokenClaims = await getIdTokenClaims();
          if (!isCancelled) setIdToken(idTokenClaims);
        } catch (error) {
          console.error("[useIdToken]: Failed to acquire token", error);
        }
      })();

      return () => {
        isCancelled = true;
      };
    }, [getIdTokenClaims, isAuthenticated]);

    return idToken;
  };
}
