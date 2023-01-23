/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: ".env",
});

module.exports = {
  siteMetadata: {
    title: `naswoimmiejscu`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: 'DOMINANT_COLOR',
          quality: 100,
          backgroundColor: `transparent`,
        }
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `${process.env.GATSBY_WORDPRESS_URL}/graphql`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
