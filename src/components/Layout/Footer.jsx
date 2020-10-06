import React from 'react';
import styled from 'styled-components';

import { spaceCss } from '../../theme';
import Container from '../Container';
import Anchor from '../Anchor';
import GithubIcon from '../GithubIcon';

const FooterWrapper = styled.footer`
  padding: ${spaceCss(2, 0)};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  text-align: center;
`;

const SourceWrapper = styled.span`
  display: inline-flex;
  justify-content: center;
`;

const FooterAnchor = styled(Anchor)`
  color: inherit;
`;

const SourceCodeIcon = styled(GithubIcon)`
  margin-left: ${spaceCss(1)};
`;

const Footer = ({ fullName, personalUrl, repositoryUrl, className }) => (
  <FooterWrapper className={className}>
    <Container>
      Made with{' '}
      <span role="img" aria-label="love">
        ❤️
      </span>{' '}
      by{' '}
      {personalUrl ? (
        <FooterAnchor href={personalUrl}>{fullName}</FooterAnchor>
      ) : (
        fullName
      )}{' '}
      ·{' '}
      <SourceWrapper>
        <span>
          <FooterAnchor href={repositoryUrl}>Source code</FooterAnchor> at
        </span>{' '}
        <SourceCodeIcon />
      </SourceWrapper>
    </Container>
  </FooterWrapper>
);

export default Footer;
