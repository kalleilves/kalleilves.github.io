import {
  space,
  color,
  fontSize,
  fontWeight,
  fontFamily,
  compose,
} from 'styled-system';

import styled from 'styled-components';

const variantToComponent = {
  body: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

const system = compose(space, color, fontSize, fontWeight, fontFamily);

const TypographyBase = styled.span`
  padding: 0px;
  margin: 0px;

  ${({ $variant, theme }) => theme.typography[$variant]};

  ${system};
`;

const Typography = ({
  variant = 'body',
  gutterBottom = false,
  as: asProp,
  ...props
}) => {
  const as = asProp ? asProp : variantToComponent[variant] ?? 'span';

  return (
    <TypographyBase
      $variant={variant}
      as={as}
      mb={gutterBottom ? 2 : 0}
      {...props}
    ></TypographyBase>
  );
};

export default Typography;
