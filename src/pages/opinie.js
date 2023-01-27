import React from "react";
import { graphql } from "gatsby";
import Opinie from "../components/Opinie/Opinie";

const OpiniePage = ({
    data: {
        wpPage: { opinie: { opienie } },
    },
}) => {
    return (
        <main>
            <Opinie opinie={opienie} />
        </main>
    );
};

export default OpiniePage;

export { Head } from "../components/Head/Head";

export const query = graphql`
  query OpinieQuery {
    wpPage(id: { eq: "cG9zdDo3NDE=" }) {
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
        id
        opinie {
          opienie {
            textUnderName
            review
            authorName
            authorImage {
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
`;