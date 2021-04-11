import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Box from '../Box';
import Navbar from '../Navbar';
import GlobalStyle from '../GlobalStyle';
import Container from '../Container';
import Footer from './Footer';
import Header from './Header';

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
            <Header
              fullName={fullName}
              intro={intro}
              linkedinUrl={linkedinUrl}
              githubUrl={githubUrl}
              email={email}
            />
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
