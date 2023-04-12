import React from "react";
import { graphql } from "gatsby";

import FirstSecionWomens from "../components/FirstSecionWomens/FirstSecionWomens";
import SecondSectionWomens from "../components/SecondSectionWomens/SecondSectionWomens";
import EffectWomens from "../components/EffectWomens/EffectWomens";
import MeetsFormwomens from "../components/MeetsFormwomens/MeetsFormwomens";
import HomeBlogSection from "../components/HomeBlogSection/HomeBlogSection";
import Wrapper from "../components/PageWrapper/PageWrapper";

const Womens = ({
  data: {
    wpPage: {
      kobiety: {
        pierwszaSekcjaKobiety,
        drugaSekcjaKobiety,
        efektWspolpracyKobiety,
        formaSpotkanKobiety,
        sekcjaZBlogiemKobiety,
      },
    },
  },
}) => {
  return (
    <Wrapper>
      <FirstSecionWomens
        title={pierwszaSekcjaKobiety.tytul}
        desc={pierwszaSekcjaKobiety.opis}
        image={pierwszaSekcjaKobiety.zdjeciePoPrawo}
        imageMobile={pierwszaSekcjaKobiety.zdjeciePoPrawoMobile}
        womens={true}
      />
      <SecondSectionWomens
        image={drugaSekcjaKobiety.zdjeciePoLewo}
        imageMobile={drugaSekcjaKobiety.zdjeciePoLewoMobile}
        title={drugaSekcjaKobiety.tytul}
        desc={drugaSekcjaKobiety.opis}
        btn={drugaSekcjaKobiety.przycisk}
        isWomens={true}
      />
      <EffectWomens
        image={efektWspolpracyKobiety.zdjeciePoPrawo}
        imageMobile={efektWspolpracyKobiety.zdjeciePoPrawoMobile}
        title={efektWspolpracyKobiety.tytul}
        listElements={efektWspolpracyKobiety.elementListy}
        desc={efektWspolpracyKobiety.opis}
        isWomens={true}
      />
      <MeetsFormwomens
        firstBtn={formaSpotkanKobiety.pierwszyPrzycisk}
        secondBtn={formaSpotkanKobiety.drugiPrzycisk}
        title={formaSpotkanKobiety.tytul}
        desc={formaSpotkanKobiety.opis}
        image={formaSpotkanKobiety.obrazPoLewo}
        isWomens={true}
        imageMobile={formaSpotkanKobiety.obrazPoLewoMobile}
      />
      <HomeBlogSection
        anotherPerson={sekcjaZBlogiemKobiety.linkDoInnejOsoby}
        iconImage={sekcjaZBlogiemKobiety.ikonkaDoLinku}
        tekstDoLinku={sekcjaZBlogiemKobiety.tekstDoLinku}
        isCase={true}
      />
    </Wrapper>
  );
};

export default Womens;

export { Head } from "../components/Head/Head";

export const query = graphql`
  query womensQuery {
    wpPage(id: { eq: "cG9zdDozMjk=" }) {
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
      kobiety {
        sekcjaZBlogiemKobiety {
          adnotacjaNaDoleStronyDrugaLinijka
          adnotacjaNaDoleStronyPierwszaLinia
          blogOpis
          blogTytul
          tekstDoLinku
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
          ikonkaDoLinku {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        pierwszaSekcjaKobiety {
          opis
          tytul
          zdjeciePoPrawo {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          zdjeciePoPrawoMobile {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        drugaSekcjaKobiety {
          opis
          przycisk {
            target
            title
            url
          }
          tytul
          zdjeciePoLewo {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          zdjeciePoLewoMobile {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        efektWspolpracyKobiety {
          tytul
          opis
          elementListy {
            tekstListy
            ikonka {
              altText
              localFile {
                publicURL
              }
            }
          }
          zdjeciePoPrawo {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          zdjeciePoPrawoMobile {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        formaSpotkanKobiety {
          drugiPrzycisk {
            target
            title
            url
          }
          obrazPoLewo {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          obrazPoLewoMobile {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          opis
          tytul
          pierwszyPrzycisk {
            target
            title
            url
          }
        }
      }
    }
  }
`;
