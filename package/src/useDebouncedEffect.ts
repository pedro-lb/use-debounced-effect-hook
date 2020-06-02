import { useEffect, useRef } from 'react';
import { useDebounce } from 'use-debounce';
import isEqual from 'lodash.isequal';

/**
 * Performs a deep comparison between two objects.
 * @param {*} a Object A.
 * @param {*} b Object B.
 */
function deepCompareEquals(a: any, b: any) {
  return isEqual(a, b);
}

/**
 * Performs a deep memoized comparison between one object and its previous value.
 * @param {*} value Value for comparison.
 */
function useDeepCompareMemoize(value: any) {
  const ref = useRef();

  if (!deepCompareEquals(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

/**
 * Hook that works just like useEffect, but debounced.
 * @param {Effect to be executed.} effect
 * @param {Objects to listen for changes.} deps
 * @param {Debounce time.} debounceTime
 */
function useDebouncedEffect(
  effect = () => {},
  deps: any[] = [],
  debounceTime: number = 0,
) {
  const [debouncedDeps] = useDebounce(deps, debounceTime, {
    equalityFn: isEqual,
  });

  useEffect(effect, useDeepCompareMemoize(debouncedDeps));
}

export default useDebouncedEffect;
