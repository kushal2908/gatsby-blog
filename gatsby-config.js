module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      option: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      option: {
        name: `posts`,
        path: `${__dirname}/src/post`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      option: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
