import React from "react";
import { graphql } from "gatsby";
import Opinie from "../components/Opinie/Opinie";

const OpiniePage = ({
  data: {
    allWpCaseStudy: { nodes },
  },
}) => {
  return (
    <main>
      <Opinie opinie={nodes} />
    </main>
  );
};

export default OpiniePage;

export { Head } from "../components/Head/Head";

export const query = graphql`
  query OpinieQuery {
    allWpCaseStudy {
      nodes {
        slug
        caseStudyArtykul {
          miniaturkaCaseStudy {
            podpisPodIminiem
            opisDoMiniaturki
            nazwaOsobyDoMiniaturki
            avatar {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
    wpPage(id: { eq: "cG9zdDo3NzQ=" }) {
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
    }
  }
`;