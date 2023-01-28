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
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: 'dominantColor',
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.svg',
        name: `Na swoim miejscu`, 
        short_name: `naswoimmiejscu`,
        start_url: `/`,
        background_color: `#FFFBEF`,
        theme_color: `#0BC76D`,
        display: `standalone`
      }
    },
  ],
};
