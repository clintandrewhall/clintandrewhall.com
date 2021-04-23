import { useState, useEffect } from 'react';

export const useFetch = <T extends Record<string, any>>(
  url: string,
  options?: RequestInit,
): { response: T | null; error: Error | null } => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json as T);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { response, error };
};
