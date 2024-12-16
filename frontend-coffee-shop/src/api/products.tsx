import { useEffect, useState } from "react";

export function useGetProductCategories() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResult(data.data);
        setLoading(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
        setLoading(false);
      }
    })();
  }, [url]);

  return { result, loading, error };
}
