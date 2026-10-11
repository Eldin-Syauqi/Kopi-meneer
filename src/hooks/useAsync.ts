import { useEffect, useState } from "react";
import { getErrorMessage } from "@/lib/errors";

export function useAsync<T>(load: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    load()
      .then((result) => {
        if (ignore) return;
        setData(result);
        setError(null);
      })
      .catch((err: unknown) => {
        if (!ignore) setError(getErrorMessage(err));
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [load]);

  return { data, loading, error };
}
