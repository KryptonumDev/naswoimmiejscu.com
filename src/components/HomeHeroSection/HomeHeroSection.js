import React from "react";
import parse from "html-react-parser";

import Button from "../Button/Button";
import Container from "../Container/Container";

import {
  StyledHomeHeroSection,
  StyledLeftWrapper,
  StyledDescWrapper,
  StyledRightWrapper,
  StyledTitleWrapper,
  StyledImage,
  StyledCircleWrapper,
} from "./StyledHomeHeroSection";

const HomeHeroSection = ({ data }) => {
  return (
    <Container>
      <StyledHomeHeroSection>
        <StyledLeftWrapper>
          <StyledCircleWrapper className="home-hero-section" />
          <StyledImage
            imageDesktop={data.zdjeciePoLewo}
            imageMobile={data.zdjeciePoLewoMobile}
          />
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledTitleWrapper className="home-hero-section">
            {data.tytulPoPrawo ? parse(data.tytulPoPrawo) : null}
          </StyledTitleWrapper>
          <StyledDescWrapper className="home-hero-section">
            {data.opisPoPrawo ? parse(data.opisPoPrawo) : null}
          </StyledDescWrapper>
          <Button
            btnData={data.przyciskPoPrawo}
            variant="green"
            haswidth="355px"
            hasheight="88px"
            hasfontsize="20px"
            className="home-hero-section"
          />
        </StyledRightWrapper>
      </StyledHomeHeroSection>
    </Container>
  );
};

export default HomeHeroSection;
