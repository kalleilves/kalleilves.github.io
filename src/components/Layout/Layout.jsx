import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Box from '../Box';
import Typography from '../Typography';
import Portrait from '../Portrait';
import Navbar from '../Navbar';
import Button from '../Button';
import GlobalStyle from '../GlobalStyle';
import GithubIcon from '../GithubIcon';
import LinkedinIcon from '../LinkedinIcon';
import EmailIcon from '../EmailIcon';
import Container from '../Container';
import Footer from './Footer';
import Stack from '../Stack';

const LAYOUT_QUERY = graphql`
  query {
    site {
      siteMetadata {
        fullName
        intro
        linkedinUrl
        githubUrl
        email
        repositoryUrl
      }
    }

    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___navigationIndex] }
      filter: { frontmatter: { inNavigation: { eq: true } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled(Container)`
  flex-grow: 1;
`;

const FooterContainer = styled(Footer)`
  flex-grow: 0;
`;

const PortraitContainer = ({ fullName }) => (
  <Box
    display="flex"
    flexDirection={['row', 'column']}
    alignItems={['center', 'flex-start']}
    mb={2}
  >
    <Box
      mb={[0, 2]}
      flexGrow={[0, 1]}
      flexBasis={['100px', '100%']}
      width="100%"
      mr={[2, 0]}
    >
      <Portrait alt={fullName} />
    </Box>
    <div>
      <Typography variant="h5" as="h1">
        {fullName}
      </Typography>
    </div>
  </Box>
);

const ContactButton = (props) => {
  return <Button as="a" target="_blank" rel="noopener" fullWidth {...props} />;
};

const Layout = ({ children }) => {
  const { site, allMarkdownRemark } = useStaticQuery(LAYOUT_QUERY);

  const {
    fullName,
    intro,
    linkedinUrl,
    githubUrl,
    email,
    repositoryUrl,
  } = site.siteMetadata;

  const { edges } = allMarkdownRemark;
  const links = edges.map(({ node }) => node.frontmatter);

  const showNavbar = links.length > 1;

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@700&family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Wrapper>
        <ContentContainer>
          <Box display="flex" flexDirection={['column', 'row']} py={4}>
            <Box
              flexGrow={[1, 0]}
              flexBasis={['100%', '30%']}
              mr={[0, 8]}
              mb={[2, 0]}
            >
              <PortraitContainer fullName={fullName} />

              <Typography gutterBottom>{intro}</Typography>

              <Stack>
                <ContactButton startIcon={<LinkedinIcon />} href={linkedinUrl}>
                  LinkedIn
                </ContactButton>

                <ContactButton startIcon={<GithubIcon />} href={githubUrl}>
                  GitHub
                </ContactButton>

                <ContactButton
                  startIcon={<EmailIcon />}
                  href={`mailto:${email}`}
                >
                  Email
                </ContactButton>
              </Stack>
            </Box>
            <Box flexGrow={[1, 0]} flexBasis={['100%', '70%']}>
              <Box mb={showNavbar ? 4 : 0}>
                {showNavbar && <Navbar links={links} />}
              </Box>
              {children}
            </Box>
          </Box>
        </ContentContainer>
        <FooterContainer
          fullName={fullName}
          personalUrl={githubUrl}
          repositoryUrl={repositoryUrl}
        />
      </Wrapper>
    </>
  );
};

export default Layout;
