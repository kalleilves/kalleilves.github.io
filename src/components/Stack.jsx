import React from 'react';
import styled from 'styled-components';

import { spaceCss } from '../theme';

const StackBase = styled.div`
  & > *:not(:last-child) {
    margin-bottom: ${({ $spacing }) => spaceCss($spacing)};
  }
`;

const Stack = ({ spacing = 2, ...props }) => (
  <StackBase $spacing={spacing} {...props} />
);

export default Stack;