import React from "react";
import parse from "html-react-parser";

import Image from "../Image/Image";
import Container from "../Container/Container";

import {
  StyledAboutMeFirstSection,
  StyledLeftWrapper,
  StyledRightWrapper,
} from "./StyledAboutMeFirstSection";
import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";

const AboutMeFirstSection = ({ data }) => {
  return (
    <Container>
      <StyledAboutMeFirstSection>
        <StyledLeftWrapper>
          <StyledTitleWrapper className="about-me-first-section">
            {data.tytulPoLewo ? parse(data.tytulPoLewo) : null}
          </StyledTitleWrapper>
          <StyledDescWrapper className="about-me-first-section">
            {data.opisPoLewo ? parse(data.opisPoLewo) : null}
          </StyledDescWrapper>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <Image
            imageDesktop={data.zdjeciePoPrawo}
            imageMobile={data.zdjeciePoPrawoMobile}
          />
        </StyledRightWrapper>
      </StyledAboutMeFirstSection>
    </Container>
  );
};

export default AboutMeFirstSection;
