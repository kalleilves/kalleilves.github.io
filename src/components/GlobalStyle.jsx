import { normalize } from 'polished';
import { createGlobalStyle, css } from 'styled-components';

import { bodyTypographyCss, breakpointDownCss } from '../theme';

const mobileCss = breakpointDownCss('xs')`
  font-size: 15px;
`;

const lightModeVariablesCss = css`
  --color-background: #ffffff;
  --color-divider: rgba(0, 0, 0, 0.1);
  --color-primary: #118ab2;
  --color-primary-50: #e2f1f6;
  --color-primary-contrast-text: #ffffff;
  --color-text-heading: rgba(0, 0, 0, 0.87);
  --color-text-primary: rgba(0, 0, 0, 0.7);
  --color-text-secondary: rgba(0, 0, 0, 0.5);
`;

const darkModeVariablesCss = css`
  --color-background: #1a1e1f;
  --color-divider: rgba(255, 255, 255, 0.2);
  --color-text-heading: #ffffff;
  --color-text-primary: rgba(255, 255, 255, 0.8);
  --color-text-secondary: rgba(0, 0, 0, 0.6);
`;

const GlobalStyle = createGlobalStyle`
  :root {
    ${lightModeVariablesCss}

    @media (prefers-color-scheme: dark) {
      ${darkModeVariablesCss}
    }
  }

  ${normalize()};

  html {
    font-size: 16px;
    min-height: 100vh;

    ${mobileCss}
  }
  
  body {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};

    ${bodyTypographyCss};
  }
  
  * {
    box-sizing: border-box;
  }

  strong {
    font-weight: ${({ theme }) => theme.fontWeights.bold}
  }
`;

export default GlobalStyle;
