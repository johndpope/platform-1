declare global {
  interface ImportMeta {
    env: {
      VITE_API_URL: string;

      VITE_AUTH0_DOMAIN: string;
      VITE_AUTH0_AUDIENCE: string;
      VITE_AUTH0_CLIENT_ID: string;
    };
  }
}

export {};
