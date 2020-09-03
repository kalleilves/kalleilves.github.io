import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Typography from '../components/Typography';

const Index = () => (
  <Layout>
    <SEO title="Page not found" />
    <Typography variant="h4" as="h2" gutterBottom>
      Page not found
    </Typography>
    <Typography>Dont' worry, just head back to the home page!</Typography>
  </Layout>
);

export default Index;
