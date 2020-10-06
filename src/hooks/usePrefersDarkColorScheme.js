import { useState, useEffect } from 'react';

import { IS_SSR } from '../config';

const matchMediaIsSupported = () => {
  return !IS_SSR && typeof window.matchMedia === 'function';
};

const QUERY = matchMediaIsSupported()
  ? window.matchMedia('(prefers-color-scheme: dark)')
  : undefined;

const getPrefersDarkColorScheme = () => {
  if (!QUERY) {
    return false;
  }

  return QUERY.matches;
};

const watchPrefersDarkColorSchme = (fn) => {
  if (!QUERY) {
    return;
  }

  const callback = (e) => {
    fn(e.matches);
  };

  QUERY.addEventListener('change', callback);

  return () => {
    QUERY.removeEventListener(callback);
  };
};

const usePrefersDarkColorScheme = () => {
  // eslint-disable-next-line
  const [prefersDarkColorScheme, setPrefersDarkColorScheme] = useState(
    getPrefersDarkColorScheme,
  );

  useEffect(() => {
    const unsubscribe = watchPrefersDarkColorSchme((prefers) => {
      setPrefersDarkColorScheme(prefers);
    });

    return unsubscribe;
  }, []);

  // TODO: Fix this when switching theme works properly with styled-components
  return false;
};

export default usePrefersDarkColorScheme;
