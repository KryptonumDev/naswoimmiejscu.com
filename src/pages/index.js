import React from "react";
import { graphql } from "gatsby";

import HomeHeroSection from "../components/HomeHeroSection/HomeHeroSection";
import WhiteCircle from "../components/WhiteCircle/WhiteCircle";
import HomeSecondSection from "../components/HomeSecondSection/HomeSecondSection";
import CooperationProcess from "../components/CooperationProcess/CooperationProcess";
import GreenCircle from "../components/GreenCircle/GreenCircle";
import UnderCooperationProcess from "../components/UnderCooperationProcess/UnderCooperationProcess";
import HomeFAQSection from "../components/HomeFAQSection/HomeFAQSection";
import HomeAboutMe from "../components/HomeAboutMe/HomeAboutMe";
import HomeContact from "../components/HomeContact/HomeContact";
import HomeBlogSection from "../components/HomeBlogSection/HomeBlogSection";

import {
  StyledCircleWrapper,
  StyledHome,
  StyledGreenCircleWrapper,
  StyledWhiteSecondCircleWrapper,
  StyledWhiteCircleWrapper,
} from "../components/Home/StyledHome";

const IndexPage = ({ data: { wpPage: { stronaGlowna }} }) => {
  return (
    <StyledHome>
      <HomeHeroSection data={stronaGlowna.pierwszaSekcjaHomePage} />
      <StyledCircleWrapper>
        <WhiteCircle />
      </StyledCircleWrapper>
      <HomeSecondSection data={stronaGlowna.drugaSekcjaHomePage} />
      <StyledGreenCircleWrapper>
        <GreenCircle />
      </StyledGreenCircleWrapper>
      <CooperationProcess data={stronaGlowna.procesWspolpracyHomePage} />
      <UnderCooperationProcess data={stronaGlowna.sekcjaPodProcesemWspolpracy} />
      <StyledWhiteCircleWrapper>
        <WhiteCircle />
      </StyledWhiteCircleWrapper>
      <HomeFAQSection data={stronaGlowna.stronaGlownaFaq} />
      <HomeAboutMe data={stronaGlowna.oMnie} />
      <StyledWhiteSecondCircleWrapper>
        <WhiteCircle />
      </StyledWhiteSecondCircleWrapper>
      <HomeContact data={stronaGlowna.spotkajmySie} />
      <HomeBlogSection />
    </StyledHome>
  );
};

export default IndexPage;

export const query = graphql`
  query homePageQuery {
    wpPage(id: { eq: "cG9zdDoyOA==" }) {
      stronaGlowna {
        pierwszaSekcjaHomePage {
          opisPoPrawo
          tytulPoPrawo
          przyciskPoPrawo {
            target
            title
            url
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
          zdjeciePoLewoMobile {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
          }
        }
        drugaSekcjaHomePage {
          ikonkaKobiety {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          ikonkaPoLewo {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          opisDoKobiet
          opisDoMlodziez
          opisPoLewo
          przyciskMlodziez {
            target
            title
            url
          }
          przyciskKobiety {
            target
            url
            title
          }
          tekstDoIkonkiMlodziez
          tekstKobiety
          tytulPoLewo
          zdjeciePoPrawoMobile {
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
        }
        procesWspolpracyHomePage {
          opisPoPrawo
          tytulPoPrawo
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
        sekcjaPodProcesemWspolpracy {
          tekstPoLewo
          tekstPoPrawo
          przyciskPoLewo {
            target
            title
            url
          }
        }
        stronaGlownaFaq {
          tytulPoLewej
          tekstMobilePodTytulem
          element {
            odpowiedz
            pytanie
          }
        }
        oMnie {
          tytulPoPrawo
          przycisk {
            target
            title
            url
          }
          opisPoPrawo
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
        spotkajmySie {
          tytul
          opis
          obrazMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          obraz {
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
