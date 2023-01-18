import React from "react";
import parse from "html-react-parser";

import Image from "../Image/Image";
import WhiteCircle from "../WhiteCircle/WhiteCircle";
import Container from "../Container/Container";

import { StyledDescWrapper } from "../HomeHeroSection/StyledHomeHeroSection";
import {
  StyledFirstSecionWomens,
  StyledCirclesWrapper,
  StyledTitleWrapperElement,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledCircleWrapper,
  StyledWhiteCircle,
} from "./StyledFirstSecionWomens";
import { StyledCircle } from "../Circle/StyledCircle";

const FirstSecionWomens = ({ title, desc, icon, image, imageMobile }) => {
  return (
    <Container>
      <StyledFirstSecionWomens>
        <StyledLeftWrapper>
          <StyledTitleWrapperElement>
            {title ? parse(title) : null}
          </StyledTitleWrapperElement>
          <StyledDescWrapper>{desc ? parse(desc) : null}</StyledDescWrapper>
          <StyledCirclesWrapper>
            <StyledCircle />
            <StyledCircle />
          </StyledCirclesWrapper>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledCircleWrapper>
            <StyledCircle />
          </StyledCircleWrapper>
          <Image imageDesktop={image} imageMobile={imageMobile} />
        </StyledRightWrapper>
        <StyledWhiteCircle>
          <WhiteCircle />
        </StyledWhiteCircle>
      </StyledFirstSecionWomens>
    </Container>
  );
};

export default FirstSecionWomens;
