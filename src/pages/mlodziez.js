import React from "react";
import { graphql } from "gatsby";

import FirstSecionWomens from "../components/FirstSecionWomens/FirstSecionWomens";
import SecondSectionYouth from "../components/SecondSectionYouth/SecondSectionYouth";
import SecondSectionWomens from "../components/SecondSectionWomens/SecondSectionWomens";
import MeetsFormwomens from "../components/MeetsFormwomens/MeetsFormwomens";
import EffectWomens from "../components/EffectWomens/EffectWomens";

const Youth = ({
  data: {
    wpPage: {
      mlodziez: {
        pierwszaSekcjaMlodziez,
        drugaSekcjaMlodziez,
        jakMogeCiPomocMlodziez,
        efektWspolpracyMlodziez,
        formaSpotkanMlodziez,
      },
    },
  },
}) => {
  return (
    <>
      <FirstSecionWomens
        title={pierwszaSekcjaMlodziez.tytul}
        desc={pierwszaSekcjaMlodziez.opis}
        icon={pierwszaSekcjaMlodziez.ikonkaObokTytulu}
        image={pierwszaSekcjaMlodziez.obrazPoPrawo}
        imageMobile={pierwszaSekcjaMlodziez.obrazPoPrawoMobile}
      />
      <SecondSectionYouth data={drugaSekcjaMlodziez} />
      <SecondSectionWomens
        image={jakMogeCiPomocMlodziez.zdjeciePoLewo}
        imageMobile={jakMogeCiPomocMlodziez.zdjeciePoLewoMobile}
        title={jakMogeCiPomocMlodziez.tytul}
        desc={jakMogeCiPomocMlodziez.opis}
        btn={jakMogeCiPomocMlodziez.przycisk}
      />
      <EffectWomens
        image={efektWspolpracyMlodziez.zdjeciePoPrawo}
        imageMobile={efektWspolpracyMlodziez.zdjeciePoPrawoMobile}
        title={efektWspolpracyMlodziez.tytul}
        listElements={efektWspolpracyMlodziez.elementyListy}
        desc={efektWspolpracyMlodziez.opis}
      />
      <MeetsFormwomens
        firstBtn={formaSpotkanMlodziez.pierwszyPrzycisk}
        secondBtn={formaSpotkanMlodziez.drugiPrzycisk}
        title={formaSpotkanMlodziez.tytul}
        desc={formaSpotkanMlodziez.opis}
        image={formaSpotkanMlodziez.obrazPoLewo}
        imageMobile={formaSpotkanMlodziez.obrazPoLewoMobile}
      />
    </>
  );
};

export default Youth;

export const query = graphql`
  query youthQuery {
    wpPage(id: { eq: "cG9zdDo0MTU=" }) {
      mlodziez {
        drugaSekcjaMlodziez {
          tekstPoLewo
          tekstPoPrawo
        }
        efektWspolpracyMlodziez {
          elementyListy {
            ikonka {
              altText
              title
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            tekstListy
          }
          opis
          tytul
          zdjeciePoPrawo {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
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
        formaSpotkanMlodziez {
          drugiPrzycisk {
            target
            title
            url
          }
          obrazPoLewo {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          obrazPoLewoMobile {
            altText
            title
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
        jakMogeCiPomocMlodziez {
          opis
          przycisk {
            title
            target
            url
          }
          tytul
          zdjeciePoLewo {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjeciePoLewoMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        pierwszaSekcjaMlodziez {
          ikonkaObokTytulu {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          obrazPoPrawo {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          obrazPoPrawoMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          opis
          tytul
        }
      }
    }
  }
`;
