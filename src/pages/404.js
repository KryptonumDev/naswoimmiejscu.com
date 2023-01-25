import React from "react";
import { graphql } from "gatsby";
import parse from "html-react-parser";

import Image from "../components/Image/Image";
import Button from "../components/Button/Button";
import BigGreenCircle from "../components/BigGreenCircle/BigGreenCircle";
import Container from "../components/Container/Container";
import WhiteCircle from "../components/WhiteCircle/WhiteCircle";

import {
  Styled404,
  StyledTitle,
  StyledDescWrapper,
  StyledSecondDescWrapper,
  StyledCircleWrapper,
  StyledWhiteCircle,
} from "../components/404/Styled404";

const NotFoundPage = ({
  data: {
    wpPage: { page404 },
  },
}) => {
  return (
    <main>
      <Container hideY>
        <Styled404>
          <StyledWhiteCircle>
            <WhiteCircle />
          </StyledWhiteCircle>
          <Image imageDesktop={page404.logo} />
          <StyledTitle>{page404 ? parse(page404.tytul) : null}</StyledTitle>
          <StyledDescWrapper>
            {page404.opisPierwszaLinijka
              ? parse(page404.opisPierwszaLinijka)
              : null}
          </StyledDescWrapper>
          <StyledSecondDescWrapper>
            {page404.opisDrugaLinijka ? parse(page404.opisDrugaLinijka) : null}
          </StyledSecondDescWrapper>
          <Button
            btnData={page404.przycisk}
            variant="green"
            haswidth="495px"
            hasClampWidth="25.781vw"
            hasheight="88px"
            hasfontsize="clamp(16px, 1.042vw, 20px)"
            hasBasicWidth="300px"
            hasBasicHeight="53px"
          />
          <StyledCircleWrapper>
            <BigGreenCircle />
          </StyledCircleWrapper>
        </Styled404>
      </Container>
    </main>
  );
};

export default NotFoundPage;

export { Head } from "../components/Head/Head";

export const query = graphql`
  query PageNotFound {
    wpPage(id: { eq: "cG9zdDo0Njg=" }) {
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
      page404 {
        opisDrugaLinijka
        opisPierwszaLinijka
        tytul
        przycisk {
          target
          title
          url
        }
        logo {
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
`;
