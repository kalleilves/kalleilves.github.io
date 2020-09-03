const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const contentLayout = path.resolve('src', 'components', 'ContentLayout.jsx');

  const query = `
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
  `;

  const { data } = await graphql(query);
  const { edges } = data.allMarkdownRemark;

  edges.forEach(({ node }) => {
    const { frontmatter } = node;
    const { path } = frontmatter;

    createPage({
      path,
      context: node,
      component: contentLayout,
    });
  });
};
