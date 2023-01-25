import React from "react";
import { graphql } from "gatsby";

import FirstSecionWomens from "../components/FirstSecionWomens/FirstSecionWomens";
import SecondSectionWomens from "../components/SecondSectionWomens/SecondSectionWomens";
import EffectWomens from "../components/EffectWomens/EffectWomens";
import MeetsFormwomens from "../components/MeetsFormwomens/MeetsFormwomens";

const Womens = ({
  data: {
    wpPage: {
      kobiety: {
        pierwszaSekcjaKobiety,
        drugaSekcjaKobiety,
        efektWspolpracyKobiety,
        formaSpotkanKobiety,
      },
    },
  },
}) => {
  return (
    <main>
      <FirstSecionWomens
        title={pierwszaSekcjaKobiety.tytul}
        desc={pierwszaSekcjaKobiety.opis}
        icon={pierwszaSekcjaKobiety.ikonkaObokTytulu}
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
      />
      <EffectWomens
        image={efektWspolpracyKobiety.zdjeciePoPrawo}
        imageMobile={efektWspolpracyKobiety.zdjeciePoPrawoMobile}
        title={efektWspolpracyKobiety.tytul}
        listElements={efektWspolpracyKobiety.elementListy}
        desc={efektWspolpracyKobiety.opis}
      />
      <MeetsFormwomens
        firstBtn={formaSpotkanKobiety.pierwszyPrzycisk}
        secondBtn={formaSpotkanKobiety.drugiPrzycisk}
        title={formaSpotkanKobiety.tytul}
        desc={formaSpotkanKobiety.opis}
        image={formaSpotkanKobiety.obrazPoLewo}
        imageMobile={formaSpotkanKobiety.obrazPoLewoMobile}
      />
    </main>
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
        pierwszaSekcjaKobiety {
          ikonkaObokTytulu {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
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
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
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
