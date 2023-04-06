import React from "react";
import parse from "html-react-parser";

import Container from "../Container/Container";
import Image from "../Image/Image";
import AnimateIcon from "../AnimateIcon/AnimateIcon";
import BigGreenCircle from "../BigGreenCircle/BigGreenCircle";

import {
  StyledAboutMeSecondSection,
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
        <StyledContent>
          <StyledMobileCircle>
            <svg
              width="338"
              height="465"
              viewBox="0 0 338 465"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="105.5"
                cy="232.5"
                r="197"
                stroke="white"
                strokeWidth="71"
              />
            </svg>
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
