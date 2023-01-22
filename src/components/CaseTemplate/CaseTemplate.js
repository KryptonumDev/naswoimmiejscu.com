import React from "react";
import { graphql } from "gatsby";

const CaseTemplate = ({ data }) => {
  return <div>CaseTemplate</div>;
};

export default CaseTemplate;

export { Head } from "../Head/Head";

export const query = graphql`
  query caseStudyQuery($caseId: String) {
    wpCaseStudy(id: { eq: $caseId }) {
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
      caseStudyArtykul {
        miniaturkaCaseStudy {
          miasto
          nazwaOsobyDoMiniaturki
          ocenaOd1Do5
          opisDoMiniaturki
          wiek
          avatar {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        sekcjaZBlogiem {
          adnotacjaNaDoleStronyDrugaLinia
          adnotacjaNaDoleStronyPierwszaLinia
          blogOpis
          blogTytul
          linkDoInnejOsoby {
            ... on WpCaseStudy {
              id
              slug
              caseStudyArtykul {
                miniaturkaCaseStudy {
                  avatar {
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
          }
        }
        trescStronyCaseStudy {
          drugaSekcjaCaseStudy {
            celOpis
            jakOpis
            opis
            tytul
            zKimOpis
            zdjeciePoLewoMobile {
              altText
              title
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            zdjeciePoLewo {
              altText
              title
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          pierwszaSekcjaCaseStudy {
            drugiOpis
            pierwszyOpis
            tytul
            zdjeciePoPrawo {
              altText
            }
            zdjeciePoPrawoMobile {
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
    }
  }
`;
