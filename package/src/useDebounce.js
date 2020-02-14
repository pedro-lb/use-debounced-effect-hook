import { useState, useEffect } from 'react';

/**
 * Hook that will only return the latest value if it's been more than
 * delay value in ms since it was last called. Otherwise, it will
 * return the previous value.
 * @param {Value to be debounced} value
 * @param {Delay of the debounce} delay
 */
export default function useDebounce(
  value,
  delay,
) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [
    value,
    delay,
  ]);

  return debouncedValue;
}
