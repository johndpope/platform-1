declare global {
  interface ImportMeta {
    env: {
      VITE_API_KEY?: string;
    };
  }
}

export function App() {
  const [imageURL, setImageURL] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!import.meta.env.VITE_API_KEY) return;
  }, []);

  return <>{imageURL && <img src={imageURL} />}</>;
}
