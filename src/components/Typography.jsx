import React from 'react';

import {
  space,
  color,
  fontSize,
  fontWeight,
  lineHeight,
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

const headingProps = {
  color: 'textHeading',
};

const variantToProps = {
  body: {
    color: 'textPrimary',
  },
  h1: headingProps,
  h2: headingProps,
  h3: headingProps,
  h4: headingProps,
  h5: headingProps,
  h6: headingProps,
};

const system = compose(
  space,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  fontFamily,
);

const TypographyBase = styled.span`
  padding: 0px;
  margin: 0px;
  color: ${({ theme }) => theme.colors.textPrimary};

  ${({ variant, theme }) => theme.typography[variant]};

  ${system};
`;

const Typography = ({
  variant = 'body',
  gutterBottom = false,
  as: asProp,
  ...props
}) => {
  const as = asProp ? asProp : variantToComponent[variant] ?? 'span';
  const variantProps = variantToProps[variant] ?? {};

  return (
    <TypographyBase
      variant={variant}
      as={as}
      {...variantProps}
      mb={gutterBottom ? 2 : 0}
      {...props}
    ></TypographyBase>
  );
};

export default Typography;
