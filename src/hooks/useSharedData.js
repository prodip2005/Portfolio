import { useState, useEffect } from 'react';

const cache = {};

export const preloadMultipleData = async (requests) => {
  await Promise.all(
    requests.map(async ({ key, fetcher }) => {
      // If it exists in cache but is just `{}` or is completely missing
      if (!cache[key]) {
        try {
          const result = await fetcher();
          cache[key] = { data: result };
        } catch (error) {
          console.error(`Error preloading data for key ${key}:`, error);
        }
      }
    })
  );
};

export function useSharedData(key, fetcher) {
  const [data, setData] = useState(cache[key] ? cache[key].data : null);
  const [isLoading, setIsLoading] = useState(!cache[key]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    if (cache[key]) {
      setIsLoading(false);
      setData(cache[key].data);
      return;
    }

    const loadData = async () => {
      try {
        const result = await fetcher();
        if (mounted) {
          cache[key] = { data: result };
          setData(result);
        }
      } catch (err) {
        if (mounted) setError(err);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, [key]);

  return { data, isLoading, error };
}
