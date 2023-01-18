import React from "react";
import { graphql } from "gatsby";

import AboutMeFirstSection from "../components/AboutMeFirstSection/AboutMeFirstSection";
import AboutMeSecondSection from "../components/AboutMeSecondSection/AboutMeSecondSection";
import AboutMeWhoIm from "../components/AboutMeWhoIm/AboutMeWhoIm";
import AboutMeProcess from "../components/AboutMeProcess/AboutMeProcess";
import AboutMeMeet from "../components/AboutMeMeet/AboutMeMeet";
import FAQSection from "../components/FAQSection/FAQSection";
import HomeBlogSection from "../components/HomeBlogSection/HomeBlogSection";

const AboutMe = ({
  data: {
    wpPage: { oMnie },
  },
}) => {
  return (
    <>
      <AboutMeFirstSection data={oMnie.pierwszaSekcjaOMnie} />
      <AboutMeSecondSection data={oMnie.drugaSekcjaOMnie} />
      <AboutMeWhoIm data={oMnie.kimTerazJestem} />
      <AboutMeProcess data={oMnie.procesWspolpracyOMnie} />
      <AboutMeMeet data={oMnie.spotkajmySieOMnie} />
      <FAQSection data={oMnie.faqOMnie} isNormalFont={true} />
      <HomeBlogSection />
    </>
  );
};

export default AboutMe;

export const query = graphql`
  query homePage {
    wpPage(id: { eq: "cG9zdDoxNTY=" }) {
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
                gatsbyImageData
              }
            }
          }
          zdjecieNaDoleMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
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
        pierwszaSekcjaOMnie {
          opisPoLewo
          tytulPoLewo
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
                gatsbyImageData
              }
            }
          }
          ikonkaMlodejOsoby {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
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
      }
    }
  }
`;
