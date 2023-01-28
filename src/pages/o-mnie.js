import React from "react";
import { graphql } from "gatsby";

import AboutMeFirstSection from "../components/AboutMeFirstSection/AboutMeFirstSection";
import AboutMeSecondSection from "../components/AboutMeSecondSection/AboutMeSecondSection";
import AboutMeWhoIm from "../components/AboutMeWhoIm/AboutMeWhoIm";
import AboutMeProcess from "../components/AboutMeProcess/AboutMeProcess";
import AboutMeMeet from "../components/AboutMeMeet/AboutMeMeet";
import FAQSection from "../components/FAQSection/FAQSection";
import HomeBlogSection from "../components/HomeBlogSection/HomeBlogSection";
import { useEffect } from "react";

const AboutMe = ({
  data: {
    wpPage: { oMnie },
  },
}) => {

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('main').classList.add('active')
    }, 1)
  }, [])
  return (
    <main id='main'>
      <AboutMeFirstSection data={oMnie.pierwszaSekcjaOMnie} />
      <AboutMeSecondSection data={oMnie.drugaSekcjaOMnie} />
      <AboutMeWhoIm data={oMnie.kimTerazJestem} />
      <AboutMeProcess data={oMnie.procesWspolpracyOMnie} />
      <AboutMeMeet data={oMnie.spotkajmySieOMnie} />
      <FAQSection data={oMnie.faqOMnie} smallMgBottom isNormalFont />
      <HomeBlogSection recDif />
    </main>
  );
};

export default AboutMe;

export { Head } from "../components/Head/Head";

export const query = graphql`
  query homePage {
    wpPage(id: { eq: "cG9zdDoxNTY=" }) {
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
      oMnie {
        drugaSekcjaOMnie {
          opisPoLewo
          opisPoPrawo
          tytul
          zdjecieNaDole {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          zdjecieNaDoleMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
        faqOMnie {
          tytul
          przycisk {
            target
            title
            url
          }
          element {
            odpowiedz
            pytanie
          }
        }
        kimTerazJestem {
          opis
          przycisk {
            target
            title
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
        pierwszaSekcjaOMnie {
          opisPoLewo
          tytulPoLewo
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
        procesWspolpracyOMnie {
          opis
          procesWspolpracyTytul
          przyciskKobiety {
            target
            title
            url
          }
          przyciskMlodeOsoby {
            target
            title
            url
          }
          ikonkaKobiet {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          ikonkaMlodejOsoby {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
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
        spotkajmySieOMnie {
          opis
          przycisk {
            target
            title
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
      }
    }
  }
`;
