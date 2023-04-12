import React from "react";
import parse from "html-react-parser";

import Image from "../Image/Image";
import Container from "../Container/Container";
import BiggerWhiteCircle from "../BiggerWhiteCircle/BiggerWhiteCircle";

import {
  StyledAboutMeFirstSection,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledMobileTopCircle,
  StyledMobileBottomCircle,
  StyledCircleWrapper,
} from "./StyledAboutMeFirstSection";
import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";
import { StyledCircle } from "../Circle/StyledCircle";

import { StyledTitleWrapperSecond } from "../AboutMeSecondSection/StyledAboutMeSecondSection";

const AboutMeFirstSection = ({ data, title }) => {
  return (
    <Container>
      <StyledTitleWrapperSecond>
        {title ? parse(title) : null}
      </StyledTitleWrapperSecond>
      <StyledAboutMeFirstSection>
        <StyledCircleWrapper>
          <BiggerWhiteCircle />
        </StyledCircleWrapper>
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
          <StyledMobileTopCircle>
            <StyledCircle hasdeclaredwidth="30px" hasdeclaredheight="30px" />
          </StyledMobileTopCircle>
          <StyledMobileBottomCircle>
            <StyledCircle
              hasdeclaredbg="var(--normalGreen)"
              hasdeclaredwidth="128px"
              hasdeclaredheight="128px"
            />
          </StyledMobileBottomCircle>
        </StyledRightWrapper>
      </StyledAboutMeFirstSection>
    </Container>
  );
};

export default AboutMeFirstSection;
