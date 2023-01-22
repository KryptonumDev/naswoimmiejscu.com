import React from "react";
import { graphql } from "gatsby";

const ArticleTemplate = ({ data }) => {
  return <div>ArticleTemplate</div>;
};

export default ArticleTemplate;

export { Head } from "../Head/Head";

export const query = graphql`
  query wpPostQuery($postId: String) {
    wpPost(id: { eq: $postId }) {
      seo {
        canonical
        metaDesc
        opengraphSiteName
        title
        opengraphUrl
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
      artykul {
        miniaturka {
          krotkiOpisDoMiniaturki
          tekstPrzycisku
          zdjecieDoMiniaturkiMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjecieDoMiniaturki {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        trescArtykulu {
          dlugiOpisPodKrotkimOpisem
          tekstDoZdjecia
          zdjecieWyrozniajaceNaPodstronieArt {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjecieWyrozniajaceNaPodstronieArtykulu {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      categories {
        nodes {
          name
        }
      }
      content
    }
  }
`;
