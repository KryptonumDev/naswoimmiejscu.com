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
    <>
      <FirstSecionWomens
        title={pierwszaSekcjaKobiety.tytul}
        desc={pierwszaSekcjaKobiety.opis}
        icon={pierwszaSekcjaKobiety.ikonkaObokTytulu}
        image={pierwszaSekcjaKobiety.zdjeciePoPrawo}
        imageMobile={pierwszaSekcjaKobiety.zdjeciePoPrawoMobile}
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
        listElements={efektWspolpracyKobiety.elementyListy}
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
    </>
  );
};

export default Womens;

export const query = graphql`
  query womensQuery {
    wpPage(id: { eq: "cG9zdDozMjk=" }) {
      kobiety {
        pierwszaSekcjaKobiety {
          ikonkaObokTytulu {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          opis
          tytul
          zdjeciePoPrawo {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjeciePoPrawoMobile {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
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
                gatsbyImageData
              }
            }
          }
          zdjeciePoLewoMobile {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
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
                  gatsbyImageData
                }
              }
            }
          }
          zdjeciePoPrawo {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjeciePoPrawoMobile {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
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
                gatsbyImageData
              }
            }
          }
          obrazPoLewoMobile {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
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
