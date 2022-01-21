import { space, flexbox, display, layout, compose } from 'styled-system';

import styled from 'styled-components';

const system = compose(space, flexbox, layout, display);

const Box = styled.div`
  ${system};
`;

export default Box;
