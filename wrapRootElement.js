import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme';

const Root = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const wrapRootElement = ({ element }) => {
  return <Root>{element}</Root>;
};

export default wrapRootElement;
