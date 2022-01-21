import React from 'react';
import styled from 'styled-components';

const LinkBase = styled.a`
  font-size: inherit;
  font-family: inherit;
  text-decoration: underline;
  color: ${({ theme, $color }) =>
    $color === 'inherit' ? 'inherit' : theme.colors.primary};

  &:hover {
    text-decoration: none;
  }
`;

const Link = React.forwardRef(({ href, color, blank, ...props }, ref) => {
  const blankProps = blank ? { target: '_blank', rel: 'noopener' } : {};

  return (
    <LinkBase href={href} ref={ref} $color={color} {...blankProps} {...props} />
  );
});

Link.displayName = 'Link';

export default Link;
