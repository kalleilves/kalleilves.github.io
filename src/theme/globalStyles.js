import { normalize, rgba } from 'polished';
import { css } from 'styled-components';

import { bodyTypographyCss, breakpointDownCss } from './utils';

const mobileCss = breakpointDownCss('xs')`
  font-size: 15px;
`;

const lightModeVariablesCss = css`
  --color-background: #ffffff;
  --color-divider: rgba(0, 0, 0, 0.1);
  --color-primary: #1976d2;
  --color-primary-contrast-text: #ffffff;
  --color-primary-dark: #1565c0;
  --color-primary-alpha-30: ${rgba('#1976d2', 0.3)};
  --color-primary-contrast-text: #ffffff;
  --color-text-heading: rgb(26, 32, 39);
  --color-text-primary: rgb(51, 63, 77);
`;

const darkModeVariablesCss = css`
  --color-primary: #90caf9;
  --color-primary-dark: #42a5f5;
  --color-primary-alpha-30: ${rgba('#90caf9', 0.3)};
  --color-primary-contrast-text: rgba(0, 0, 0, 0.87);
  --color-background: rgb(0, 30, 60);
  --color-divider: rgba(255, 255, 255, 0.2);
  --color-text-heading: #ffffff;
  --color-text-primary: rgb(178, 186, 194);
`;

export const normalizeCss = css`
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
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const globalCss = css`
  :root {
    ${lightModeVariablesCss}

    @media (prefers-color-scheme: dark) {
      ${darkModeVariablesCss}
    }
  }

  ${normalizeCss};
`;

export default globalCss;
