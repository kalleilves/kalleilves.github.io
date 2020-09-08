import React from 'react';
import styled from 'styled-components';

import { spaceCss } from '../../theme';
import Container from '../Container';
import Anchor from '../Anchor';

const FooterWrapper = styled.footer`
  padding: ${spaceCss(2, 0)};
  background-color: rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const NameLink = styled(Anchor)`
  color: inherit;
`;

const Footer = ({ fullName, linkUrl }) => (
  <FooterWrapper>
    <Container>
      Made with <span role="img" aria-label="love">❤️</span> by{' '}
      {linkUrl ? <NameLink href={linkUrl}>{fullName}</NameLink> : fullName}
    </Container>
  </FooterWrapper>
);

export default Footer;
