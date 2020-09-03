import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

import { bodyTypographyCss } from '../theme';

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  html {
    font-size: 16px;
  
    @media(max-width: ${({ theme }) => theme.breakpoints[0]}) {
      font-size: 15px;
    }
  }
  
  body {
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
