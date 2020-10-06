import React, { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import createTheme from './src/theme';
import usePrefersDarkColorScheme from './src/hooks/usePrefersDarkColorScheme';

const Root = ({ children }) => {
  const prefersDarkColorScheme = usePrefersDarkColorScheme();

  const theme = useMemo(() => {
    return createTheme({
      colorMode: prefersDarkColorScheme ? 'dark' : 'light',
    });
  }, [prefersDarkColorScheme]);

  console.log(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const wrapRootElement = ({ element }) => {
  return <Root>{element}</Root>;
};

export default wrapRootElement;
