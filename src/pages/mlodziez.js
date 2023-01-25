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
    <main>
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
    </main>
  );
};

export default Youth;

export { Head } from "../components/Head/Head";

export const query = graphql`
  query youthQuery {
    wpPage(id: { eq: "cG9zdDo0MTU=" }) {
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
                  gatsbyImageData(quality: 100)
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
                gatsbyImageData(quality: 100)
              }
            }
          }
          zdjeciePoPrawoMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
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
                gatsbyImageData(quality: 100)
              }
            }
          }
          obrazPoLewoMobile {
            altText
            title
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
                gatsbyImageData(quality: 100)
              }
            }
          }
          zdjeciePoLewoMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
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
                gatsbyImageData(quality: 100)
              }
            }
          }
          obrazPoPrawo {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          obrazPoPrawoMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
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
