module.exports = {
  siteMetadata: {
    title: 'Kalle Ilves',
    description: 'Kalle Ilves portfolio',
    author: `@kalleilv`,
    fullName: 'Kalle Ilves',
    linkedinUrl: 'https://www.linkedin.com/in/kalleilves',
    githubUrl: 'https://github.com/Kaltsoon',
    email: 'kalleilv@gmail.com',
    intro:
      'An enthusiastic and talented Full Stack Software Developer currently located in Helsinki Finland. Master of Computer Science from Algorithms, Data analytics, and Machine learning programme.',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    { resolve: `gatsby-transformer-remark` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-offline`,
  ],
};
