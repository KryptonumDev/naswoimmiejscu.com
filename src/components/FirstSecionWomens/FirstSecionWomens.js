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
  StyledMobileCircleWrapper,
} from "./StyledFirstSecionWomens";
import { StyledCircle } from "../Circle/StyledCircle";

const FirstSecionWomens = ({
  title,
  desc,
  icon,
  image,
  imageMobile,
  womens,
}) => {
  return (
    <Container>
      <StyledFirstSecionWomens>
        <StyledLeftWrapper>
          <StyledTitleWrapperElement className="first-section-womens-youth">
            {title ? parse(title) : null}
            <Image imageDesktop={icon} objectFit="contain" />
          </StyledTitleWrapperElement>
          <StyledDescWrapper className="first-section-womens-youth">
            {desc ? parse(desc) : null}
          </StyledDescWrapper>
          <StyledCirclesWrapper>
            <StyledCircle
              hasdeclaredwidth="22px"
              hasdeclaredheight="22px"
              hasdeclaredbg="var(--normalGreen)"
            />
            <StyledCircle
              hasdeclaredwidth="22px"
              hasdeclaredheight="22px"
              hasdeclaredbg="var(--normalGreen)"
            />
          </StyledCirclesWrapper>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledCircleWrapper iswomens={womens}>
            <StyledCircle hasdeclaredbg="var(--normalGreen)" />
          </StyledCircleWrapper>
          <StyledMobileCircleWrapper>
            <StyledCircle hasdeclaredwidth="30px" hasdeclaredheight="30px" />
          </StyledMobileCircleWrapper>
          <Image imageDesktop={image} imageMobile={imageMobile} />
        </StyledRightWrapper>
        <StyledWhiteCircle>
          <svg
            width="534"
            height="774"
            viewBox="0 0 534 774"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="387"
              cy="387"
              r="351.5"
              stroke="white"
              strokeWidth="71"
            />
          </svg>
        </StyledWhiteCircle>
      </StyledFirstSecionWomens>
    </Container>
  );
};

export default FirstSecionWomens;
