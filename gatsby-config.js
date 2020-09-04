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
      'Full Stack Software Developer, MSc in Computer Science, Teacher, Mentor.',
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
        name: `Kalle Ilves`,
        short_name: `Kalle Ilves`,
        start_url: `/`,
        background_color: `#118ab2`,
        theme_color: `#118ab2`,
        display: `minimal-ui`,
        icon: `src/images/kalle-ilves-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-offline`,
  ],
};
