import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../components/GlobalStyle';
import MDXProvider from '../components/MDXProvider';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
