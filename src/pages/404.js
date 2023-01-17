import React from "react";
import { graphql } from "gatsby";

const NotFoundPage = ({ data }) => {
  return <main>404</main>;
};

export default NotFoundPage;

export const query = graphql`
  query PageNotFound {
    wpPage(id: { eq: "cG9zdDo0Njg=" }) {
      page404 {
        opisDrugaLinijka
        opisPierwszaLinijka
        tytul
        przycisk {
          target
          title
          url
        }
        logo {
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
  }
`;
