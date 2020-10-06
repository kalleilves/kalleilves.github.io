import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import createTheme from './src/theme';
import usePrefersDarkColorScheme from './src/hooks/usePrefersDarkColorScheme';

const Root = ({ children }) => {
  const prefersDarkColorScheme = usePrefersDarkColorScheme();

  console.log(prefersDarkColorScheme);

  const getTheme = () => {
    return createTheme({
      colorMode: prefersDarkColorScheme ? 'dark' : 'light',
    });
  };

  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    setTheme(getTheme());
  }, [prefersDarkColorScheme]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const wrapRootElement = ({ element }) => {
  return <Root>{element}</Root>;
};

export default wrapRootElement;
