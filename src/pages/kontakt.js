import React from "react";
import { graphql } from "gatsby";
import parse from "html-react-parser";

import FAQSection from "../components/FAQSection/FAQSection";
import Image from "../components/Image/Image";

import {
  StyledFAQMargin,
  StyledContentWrapper,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledCircleWrapper,
  StyledButtonsWrapper,
} from "../components/Contact/StyledFAQMargin";
import { StyledCircle } from "../components/Circle/StyledCircle";
import Container from "../components/Container/Container";
import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../components/HomeHeroSection/StyledHomeHeroSection";
import Button from "../components/Button/Button";

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
            <StyledDescWrapper>
              {kontakt.opis ? parse(kontakt.opis) : null}
            </StyledDescWrapper>
            <StyledButtonsWrapper>
              <Button
                btnData={kontakt.pierwszyPrzycisk}
                variant="green"
                haswidth="495px"
                hasheight="88px"
                hasfontsize="20px"
              />
              <Button
                btnData={kontakt.drugiPrzycisk}
                haswidth="495px"
                hasheight="88px"
                hasfontsize="20px"
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
          </StyledRightWrapper>
        </StyledContentWrapper>
      </Container>
      <StyledFAQMargin>
        <FAQSection data={kontakt.kontaktFaq} btnWidth="495px" />
      </StyledFAQMargin>
    </>
  );
};

export default Contact;

export const query = graphql`
  query contactQuery {
    wpPage(id: { eq: "cG9zdDoyNTk=" }) {
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
