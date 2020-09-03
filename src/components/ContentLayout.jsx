import React from 'react';
import { graphql } from 'gatsby';

import Layout from './Layout';
import SEO from './SEO';
import renderAst from '../utils/renderAst';

const ContentLayout = ({ data }) => {
  const {
    markdownRemark: { htmlAst, frontmatter },
  } = data;

  const { title } = frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      {renderAst(htmlAst)}
    </Layout>
  );
};

export const query = graphql`
  query getMarkdownPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        title
        path
      }
    }
  }
`;

export default ContentLayout;
