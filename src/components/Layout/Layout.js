import styled from 'styled-components';

import Box from '../Box';
import Navbar from '../Navbar';
import Container from '../Container';
import Footer from './Footer';
import Header from './Header';
import SEO from '../SEO';

import {
  FULL_NAME,
  INTRO,
  LINKEDIN_URL,
  GITHUB_URL,
  EMAIL,
  REPOSITORY_URL,
} from '../../config';

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

const Layout = ({ children, title, description, author }) => {
  return (
    <>
      <SEO title={title} description={description} author={author} />

      <Wrapper>
        <ContentContainer>
          <Box display="flex" flexDirection={['column', 'row']} py={4}>
            <Header
              fullName={FULL_NAME}
              intro={INTRO}
              linkedinUrl={LINKEDIN_URL}
              githubUrl={GITHUB_URL}
              email={EMAIL}
            />
            <Box flexGrow={[1, 0]} flexBasis={['100%', '70%']}>
              <Box mb={4}>
                <Navbar />
              </Box>
              {children}
            </Box>
          </Box>
        </ContentContainer>
        <FooterContainer
          fullName={FULL_NAME}
          personalUrl={GITHUB_URL}
          repositoryUrl={REPOSITORY_URL}
        />
      </Wrapper>
    </>
  );
};

export default Layout;
