import React from "react";
import parse from "html-react-parser";

import BigGreenCircle from "../BigGreenCircle/BigGreenCircle";
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

const SecondSectionWomens = ({ image, imageMobile, title, desc, btn }) => {
  return (
    <Container>
      <StyledSecondSectionWomens>
        <StyledLeftWrapper>
          <StyledGreenCircleWrapper>
            <svg
              width="345"
              height="721"
              viewBox="0 0 345 721"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="-15.5"
                cy="360.5"
                r="333"
                stroke="#0BC76D"
                stroke-width="55"
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
          />
        </StyledRightWrapper>
      </StyledSecondSectionWomens>
    </Container>
  );
};

export default SecondSectionWomens;
