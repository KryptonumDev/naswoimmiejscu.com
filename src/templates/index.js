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
import Wrapper from "../components/PageWrapper/PageWrapper";

const IndexPage = ({
  data: {
    wpPage: { stronaGlowna },
  },
}) => {
  return (
    <Wrapper>
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
        <UnderCooperationProcess
          data={stronaGlowna.sekcjaPodProcesemWspolpracy}
        />
        <StyledWhiteCircleWrapper>
          <WhiteCircle />
        </StyledWhiteCircleWrapper>
        <HomeFAQSection data={stronaGlowna.stronaGlownaFaq} />
        <HomeAboutMe data={stronaGlowna.oMnie} />
        <StyledWhiteSecondCircleWrapper>
          <WhiteCircle />
        </StyledWhiteSecondCircleWrapper>
        <HomeContact data={stronaGlowna.spotkajmySie} />
      </StyledHome>
      <HomeBlogSection
        anotherPerson={stronaGlowna.sekcjaZBlogiem.linkDoInnejOsoby}
        iconImage={stronaGlowna.sekcjaZBlogiem.ikonkaDoLinku}
        tekstDoLinku={stronaGlowna.sekcjaZBlogiem.tekstDoLinku}
      />
    </Wrapper>
  );
};

export default IndexPage;

export { Head } from "../components/Head/Head";

export const query = graphql`
  query homePageQuery {
    wpPage(id: { eq: "cG9zdDoyOA==" }) {
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
      stronaGlowna {
        sekcjaZBlogiem {
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
                  avatarIkonka {
                    sourceUrl
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
            title
          }
        }
        drugaSekcjaHomePage {
          opisDoDorosli
          opisDoMlodziez
          opisPoLewo
          przyciskMlodziez {
            target
            title
            url
          }
          przyciskDorosli {
            target
            url
            title
          }
          tekstDoIkonkiMlodziez
          tekstDorosli
          tytulPoLewo
          zdjeciePoPrawoMobile {
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
        }
        procesWspolpracyHomePage {
          opisPoPrawo
          tytulPoPrawo
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
          tytulPoPrawo
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
        spotkajmySie {
          tytul
          opis
          obrazMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          obraz {
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
