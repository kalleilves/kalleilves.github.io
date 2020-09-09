import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

import { bodyTypographyCss, breakpointDownCss } from '../theme';

const mobileCss = breakpointDownCss('xs')`
  font-size: 15px;
`;

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  html {
    font-size: 16px;
    min-height: 100vh;

    ${mobileCss}
  }
  
  body {
    min-height: 100vh;
    
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
