import React from 'react';

import Box from '../Box';
import Typography from '../Typography';
import Portrait from '../Portrait';
import Button from '../Button';
import GithubIcon from '../GithubIcon';
import LinkedinIcon from '../LinkedinIcon';
import EmailIcon from '../EmailIcon';
import Stack from '../Stack';

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

const Header = ({ fullName, intro, email, githubUrl, linkedinUrl }) => {
  return (
    <Box
      as="header"
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

        <ContactButton startIcon={<EmailIcon />} href={`mailto:${email}`}>
          Email
        </ContactButton>
      </Stack>
    </Box>
  );
};

export default Header;
