import { useEffect } from "react";
import useDebounce from "./useDebounce";

/**
 * Hook that works just like useEffect, but debounced.
 * @param {Effect to be executed.} effect
 * @param {Objects to listen for changes.} deps
 * @param {Debounce time.} debounceTime
 */
export default function useDebouncedEffect(
  effect = () => {},
  deps = [],
  debounceTime = 0,
) {
  const debouncedDeps = useDebounce(deps, debounceTime);

  useEffect(() => {
    effect();
  }, debouncedDeps);
}
