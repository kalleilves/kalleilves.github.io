import React from 'react';
import styled from 'styled-components';

const AnchorBase = styled.a`
  font-size: inherit;
  font-family: inherit;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    text-decoration: none;
  }
`;

const Anchor = ({ href, blank: blankProp, ...props }) => {
  const blank = blankProp ?? Boolean(href);
  const blankProps = blank ? { target: '_blank', rel: 'noopener' } : {};

  return <AnchorBase href={href} {...blankProps} {...props} />;
};

export default Anchor;
