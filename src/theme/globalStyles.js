import { normalize, rgba, darken } from 'polished';
import { css } from 'styled-components';

import { bodyTypographyCss, breakpointDownCss } from './utils';

const mobileCss = breakpointDownCss('xs')`
  font-size: 15px;
`;

const primaryColor = '#1A66FF';

const lightModeVariablesCss = css`
  --color-background: #ffffff;
  --color-divider: rgba(0, 0, 0, 0.1);
  --color-primary: ${primaryColor};
  --color-primary-dark: ${darken(0.1, primaryColor)};
  --color-primary-alpha-30: ${rgba(primaryColor, 0.3)};
  --color-primary-alpha-10: ${rgba(primaryColor, 0.1)};
  --color-primary-contrast-text: #ffffff;
  --color-text-heading: rgba(0, 0, 0, 0.87);
  --color-text-primary: rgba(0, 0, 0, 0.7);
  --color-text-secondary: rgba(0, 0, 0, 0.5);
`;

const darkModeVariablesCss = css`
  --color-background: #202124;
  --color-divider: rgba(255, 255, 255, 0.2);
  --color-text-heading: #ffffff;
  --color-text-primary: rgba(255, 255, 255, 0.8);
  --color-text-secondary: rgba(0, 0, 0, 0.6);
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
