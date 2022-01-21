import styled from 'styled-components';

import { spaceCss } from '../theme';

const Container = styled.div`
  margin: 0px auto;
  width: 100%;
  max-width: ${({ theme }) => theme.contentMaxWidth};
  padding: ${spaceCss(0, 4)};
`;

export default Container;
