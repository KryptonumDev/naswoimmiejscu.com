import React from "react";
import { graphql } from "gatsby";
import Opinie from "../components/Opinie/Opinie";
import Wrapper from "../components/PageWrapper/PageWrapper";

const OpiniePage = ({
  data: {
    allWpCaseStudy: { nodes },
  },
}) => {
  return (
    <Wrapper>
      <Opinie opinie={nodes} />
    </Wrapper>
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
            avatarIkonka {
              localFile {
                publicURL
              }
            }
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
