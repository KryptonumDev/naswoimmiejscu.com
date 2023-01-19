import React from "react";
import parse from "html-react-parser";

import Container from "../Container/Container";
import Image from "../Image/Image";
import AnimateIcon from "../AnimateIcon/AnimateIcon";
import BigGreenCircle from "../BigGreenCircle/BigGreenCircle";
import BiggerWhiteCircle from "../BiggerWhiteCircle/BiggerWhiteCircle";

import {
  StyledAboutMeSecondSection,
  StyledTitleWrapper,
  StyledContent,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledImageWrapper,
  StyledCircleWrapper,
  StyledMobileCircle,
} from "./StyledAboutMeSecondSection";
import { StyledCircle } from "../Circle/StyledCircle";

const AboutMeSecondSection = ({ data }) => {
  return (
    <Container className="about-me-second-section">
      <StyledAboutMeSecondSection>
        <StyledTitleWrapper>
          {data.tytul ? parse(data.tytul) : null}
        </StyledTitleWrapper>
        <StyledContent>
          <StyledMobileCircle>
            <BiggerWhiteCircle />
          </StyledMobileCircle>
          <StyledLeftWrapper>
            <StyledCircle
              hasdeclaredwidth="36px"
              hasdeclaredheight="36px"
              className="about-me-second-circle"
            />
            <div>{data.opisPoLewo ? parse(data.opisPoLewo) : null}</div>
          </StyledLeftWrapper>
          <StyledRightWrapper>
            <AnimateIcon />
            <div>{data.opisPoPrawo ? parse(data.opisPoPrawo) : null}</div>
          </StyledRightWrapper>
        </StyledContent>
      </StyledAboutMeSecondSection>
      <StyledImageWrapper>
        <Image
          imageDesktop={data.zdjecieNaDole}
          imageMobile={data.zdjecieNaDoleMobile}
        />
        <StyledCircleWrapper>
          <BigGreenCircle />
        </StyledCircleWrapper>
      </StyledImageWrapper>
    </Container>
  );
};

export default AboutMeSecondSection;
