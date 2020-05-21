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

    /*Creates ImageSharp nodes from image types that are supported by the Sharp image processing library and provides fields in their GraphQL types for
      processing your images in a variety of ways including resizing, cropping, and creating responsive images */
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    ////

    //gatsby-plugin-mdx && gatsby-remark-images
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    // google font
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway\:00;200;300;500;600;700;800;900`],
        display: "swap",
      },
    },
  ],
}
