import React from "react";
import parse from "html-react-parser";

import Container from "../Container/Container";
import Image from "../Image/Image";
import AnimateIcon from "../AnimateIcon/AnimateIcon";
import BigGreenCircle from "../BigGreenCircle/BigGreenCircle";

import {
  StyledAboutMeSecondSection,
  StyledTitleWrapper,
  StyledContent,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledImageWrapper,
  StyledCircleWrapper,
} from "./StyledAboutMeSecondSection";
import { StyledCircle } from "../Circle/StyledCircle";

const AboutMeSecondSection = ({ data }) => {
  return (
    <Container>
      <StyledAboutMeSecondSection>
        <StyledTitleWrapper>
          {data.tytul ? parse(data.tytul) : null}
        </StyledTitleWrapper>
        <StyledContent>
          <StyledLeftWrapper>
            <StyledCircle hasdeclaredwidth="36px" hasdeclaredheight="36px" />
            <div>{data.opisPoLewo ? parse(data.opisPoLewo) : null}</div>
          </StyledLeftWrapper>
          <StyledRightWrapper>
            <AnimateIcon />
            <div>{data.opisPoPrawo ? parse(data.opisPoPrawo) : null}</div>
          </StyledRightWrapper>
        </StyledContent>
        <StyledImageWrapper>
          <Image
            imageDesktop={data.zdjecieNaDole}
            imageMobile={data.zdjecieNaDoleMobile}
          />
          <StyledCircleWrapper>
            <BigGreenCircle />
          </StyledCircleWrapper>
        </StyledImageWrapper>
      </StyledAboutMeSecondSection>
    </Container>
  );
};

export default AboutMeSecondSection;
