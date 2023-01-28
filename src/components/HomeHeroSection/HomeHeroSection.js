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
  StyledBottomCircle,
} from "./StyledHomeHeroSection";
import { StyledCircle } from "../Circle/StyledCircle";

const HomeHeroSection = ({ data }) => {
  return (
    <Container>
      <StyledHomeHeroSection>
        <StyledLeftWrapper>
          <StyledCircleWrapper className="home-hero-section" />
          {data.zdjeciePoLewo ? (
            <StyledImage
              imageDesktop={data.zdjeciePoLewo}
              imageMobile={data.zdjeciePoLewoMobile}
              loading="eager"
            />
          ) : null}
          <StyledBottomCircle>
            <StyledCircle
              hasdeclaredwidth="128px"
              hasdeclaredheight="128px"
              hasdeclaredbg="var(--normalGreen)"
            />
          </StyledBottomCircle>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledTitleWrapper className="home-hero-section">
            {data.tytulPoPrawo ? parse(data.tytulPoPrawo) : null}
          </StyledTitleWrapper>
          <StyledDescWrapper className="home-hero-section">
            {data.opisPoPrawo ? parse(data.opisPoPrawo) : null}
          </StyledDescWrapper>
          {data.przyciskPoPrawo ? (
            <Button
              btnData={data.przyciskPoPrawo}
              className="home-hero-section"
              variant="green"
              haswidth="355px"
              hasheight="81px"
              hasClampHeight="4.583vw"
              hasfontsize="clamp(16px, 1.042vw, 20px)"
              hasClampWidth="18.490vw"
              hasBasicWidth="277px"
              hasBasicHeight="73px"
              ariaLabel="link"
            />
          ) : null}
        </StyledRightWrapper>
      </StyledHomeHeroSection>
    </Container>
  );
};

export default HomeHeroSection;
