import { useEffect, useRef } from 'react';

const useDebounce = (
  callback: (arg: URLSearchParams) => void,
  delay: number
) => {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (args: URLSearchParams) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      callback(args);
    }, delay);
  };

  return debouncedCallback;
};

export default useDebounce;
