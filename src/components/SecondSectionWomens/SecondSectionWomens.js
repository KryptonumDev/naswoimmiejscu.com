import React from "react";
import parse from "html-react-parser";

import Button from "../Button/Button";
import Image from "../Image/Image";
import Container from "../Container/Container";

import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";
import {
  StyledSecondSectionWomens,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledGreenCircleWrapper,
} from "./StyledSecondSectionWomens";

const SecondSectionWomens = ({
  image,
  imageMobile,
  title,
  desc,
  btn,
  isWomens,
}) => {
  return (
    <Container>
      <StyledSecondSectionWomens>
        <StyledLeftWrapper>
          <StyledGreenCircleWrapper iswomens={isWomens}>
            <svg
              width="721"
              height="721"
              viewBox="0 0 721 721"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="360.5"
                cy="360.5"
                r="333"
                stroke="currentColor"
                strokeWidth="55"
              />
            </svg>
          </StyledGreenCircleWrapper>
          <Image imageDesktop={image} imageMobile={imageMobile} />
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledTitleWrapper className="second-section-womens-youth">
            {title ? parse(title) : null}
          </StyledTitleWrapper>
          <StyledDescWrapper className="second-section-womens-youth">
            {desc ? parse(desc) : null}
          </StyledDescWrapper>
          <Button
            btnData={btn}
            variant="green"
            hasClampWidth="25.938vw"
            hasBasicWidth="300px"
            haswidth="498px"
            hasheight="88px"
            hasfontsize="clamp(16px, 1.042vw, 20px)"
            className="second-section-womens-youth"
            ariaLabel="link"
          />
        </StyledRightWrapper>
      </StyledSecondSectionWomens>
    </Container>
  );
};

export default SecondSectionWomens;
