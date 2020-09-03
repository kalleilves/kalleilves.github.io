import React from 'react';
import styled from 'styled-components';

const SvgIconBase = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  font-size: 1.5rem;
`;

const SvgIcon = ({ viewBox = '0 0 24 24', ...props }) => {
  return <SvgIconBase role="img" viewBox={viewBox} {...props} />
};

export default SvgIcon;