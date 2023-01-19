import React from "react";
import { graphql } from "gatsby";
import parse from "html-react-parser";

import Image from "../components/Image/Image";
import Button from "../components/Button/Button";
import BigGreenCircle from "../components/BigGreenCircle/BigGreenCircle";
import Container from "../components/Container/Container";

import {
  Styled404,
  StyledTitle,
  StyledDescWrapper,
  StyledSecondDescWrapper,
  StyledCircleWrapper,
} from "../components/404/Styled404";

const NotFoundPage = ({
  data: {
    wpPage: { page404 },
  },
}) => {
  return (
    <Container>
      <Styled404>
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
          hasheight="88px"
          hasfontsize="20px"
          className="home-hero-section"
        />
        <StyledCircleWrapper>
          <BigGreenCircle />
        </StyledCircleWrapper>
      </Styled404>
    </Container>
  );
};

export default NotFoundPage;

export const query = graphql`
  query PageNotFound {
    wpPage(id: { eq: "cG9zdDo0Njg=" }) {
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
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
