import React from "react";
import { graphql } from "gatsby";

import HomeHeroSection from "../components/HomeHeroSection/HomeHeroSection";
import WhiteCircle from "../components/WhiteCircle/WhiteCircle";
import HomeSecondSection from "../components/HomeSecondSection/HomeSecondSection";
import CooperationProcess from "../components/CooperationProcess/CooperationProcess";
import GreenCircle from "../components/GreenCircle/GreenCircle";
import UnderCooperationProcess from "../components/UnderCooperationProcess/UnderCooperationProcess";
import HomeFAQSection  from "../components/HomeFAQSection/HomeFAQSection";

import { StyledCircleWrapper, StyledHome, StyledGreenCircleWrapper, StyledWhiteCircleWrapper } from "../components/Home/StyledHome";

const IndexPage = ({ data }) => {
  const shortData = data.wpPage.stronaGlowna;

  return (
    <StyledHome>
      <HomeHeroSection data={shortData.pierwszaSekcja} />
      <StyledCircleWrapper>
        <WhiteCircle />
      </StyledCircleWrapper>
      <HomeSecondSection data={shortData.drugaSekcja} />
      <StyledGreenCircleWrapper>
        <GreenCircle />
      </StyledGreenCircleWrapper>
      <CooperationProcess data={shortData.procesWspolpracy} />
      <UnderCooperationProcess data={shortData.sekcjaPodProcesemWspolpracy} />
      <StyledWhiteCircleWrapper>
        <WhiteCircle />
      </StyledWhiteCircleWrapper>
      <HomeFAQSection data={shortData.stronaGlownaFaq} />
    </StyledHome>
  );
};

export default IndexPage;

export const query = graphql`
  query homePage {
    wpPage(id: { eq: "cG9zdDoyOA==" }) {
      stronaGlowna {
        pierwszaSekcja {
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
        drugaSekcja {
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
        procesWspolpracy {
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
          element {
            odpowiedz
            pytanie
          }
        }
      }
    }
  }
`;
