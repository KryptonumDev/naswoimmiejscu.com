import React from "react";
import { graphql } from "gatsby";
import parse from "html-react-parser";

import FAQSection from "../components/FAQSection/FAQSection";
import Image from "../components/Image/Image";
import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import WhiteCircle from "../components/WhiteCircle/WhiteCircle";

import {
  StyledFAQMargin,
  StyledContentWrapper,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledCircleWrapper,
  StyledButtonsWrapper,
  StyledMobileCircle,
  StyledBigWhiteCircle,
} from "../components/Contact/StyledFAQMargin";
import { StyledCircle } from "../components/Circle/StyledCircle";
import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../components/HomeHeroSection/StyledHomeHeroSection";

const Contact = ({
  data: {
    wpPage: { kontakt },
  },
}) => {
  return (
    <>
      <Container>
        <StyledContentWrapper>
          <StyledLeftWrapper>
            <StyledTitleWrapper className="contact-page">
              {kontakt.tytulKontakt ? parse(kontakt.tytulKontakt) : null}
            </StyledTitleWrapper>
            <StyledDescWrapper className="contact-page">
              {kontakt.opis ? parse(kontakt.opis) : null}
            </StyledDescWrapper>
            <StyledButtonsWrapper>
              <Button
                btnData={kontakt.pierwszyPrzycisk}
                variant="green"
                haswidth="495px"
                hasClampWidth="25.781vw"
                hasheight="88px"
                hasfontsize="clamp(16px, 1.042vw, 20px)"
                hasBasicWidth="300px"
                className="contact-page-btn"
                hasBasicHeight="53px"
              />
              <Button
                btnData={kontakt.drugiPrzycisk}
                haswidth="495px"
                hasheight="88px"
                hasClampWidth="25.781vw"
                hasfontsize="clamp(16px, 1.042vw, 20px)"
                hasBasicWidth="300px"
                className="contact-page-btn"
                hasBasicHeight="53px"
              />
            </StyledButtonsWrapper>
          </StyledLeftWrapper>
          <StyledRightWrapper>
            <Image
              imageDesktop={kontakt.zdjeciePoPrawo}
              imageMobile={kontakt.zdjeciePoPrawoMobile}
            />
            <StyledCircleWrapper>
              <StyledCircle hasdeclaredbg="var(--normalGreen)" />
            </StyledCircleWrapper>
            <StyledMobileCircle>
              <StyledCircle
                hasdeclaredbg="var(--buttonBrownHover)"
                hasdeclaredwidth="30px"
                hasdeclaredheight="31px"
              />
            </StyledMobileCircle>
            <StyledBigWhiteCircle>
              <WhiteCircle />
            </StyledBigWhiteCircle>
          </StyledRightWrapper>
        </StyledContentWrapper>
      </Container>
      <StyledFAQMargin>
        <FAQSection
          hasLeftPadding
          data={kontakt.kontaktFaq}
          btnWidth="495px"
          smallMgBottom
        />
      </StyledFAQMargin>
    </>
  );
};

export default Contact;

export { Head } from "../components/Head/Head";

export const query = graphql`
  query contactQuery {
    wpPage(id: { eq: "cG9zdDoyNTk=" }) {
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
      kontakt {
        tytulKontakt
        drugiPrzycisk {
          target
          title
          url
        }
        opis
        pierwszyPrzycisk {
          target
          title
          url
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
        kontaktFaq {
          tytul
          element {
            odpowiedz
            pytanie
          }
          przycisk {
            target
            title
            url
          }
        }
      }
    }
  }
`;
