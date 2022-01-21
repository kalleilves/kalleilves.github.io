import React from 'react';

import Layout from '../components/Layout';
import Typography from '../components/Typography';
import InternalLink from '../components/InternalLink';

const NotFound = () => (
  <Layout title="Not found">
    <Typography variant="h3" as="h1" gutterBottom>
      Not found
    </Typography>
    <Typography>
      There's nothing to see here. Don't worry, just head back to the{' '}
      <InternalLink href="/">home page</InternalLink>.
    </Typography>
  </Layout>
);

export default NotFound;
