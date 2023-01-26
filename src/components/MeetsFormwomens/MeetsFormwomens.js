import React from "react";
import parse from "html-react-parser";

import Button from "../Button/Button";
import Image from "../Image/Image";
import Container from "../Container/Container";

import { StyledCircle } from "../Circle/StyledCircle";
import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";
import {
  StyledMeetsFormwomens,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledButtonsWrapper,
  StyledCircleWrapper,
} from "./StyledMeetsFormwomens";

const MeetsFormwomens = ({
  firstBtn,
  secondBtn,
  title,
  desc,
  image,
  imageMobile,
  isWomens,
}) => {
  return (
    <Container>
      <StyledMeetsFormwomens iswomens={isWomens}>
        <StyledLeftWrapper>
          <StyledCircleWrapper>
            <StyledCircle />
          </StyledCircleWrapper>
          <Image imageDesktop={image} imageMobile={imageMobile} />
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledTitleWrapper className="meets-form-womens">
            {title ? parse(title) : null}
          </StyledTitleWrapper>
          <StyledDescWrapper className="meets-form-womens">
            {desc ? parse(desc) : null}
          </StyledDescWrapper>
          <StyledButtonsWrapper>
            <Button
              btnData={firstBtn}
              variant="green"
              hasClampWidth="25.938vw"
              hasBasicWidth="300px"
              haswidth="498px"
              hasheight="88px"
              hasfontsize="clamp(16px, 1.042vw, 20px)"
              className="second-section-womens-youth"
            />
            <Button
              btnData={secondBtn}
              hasClampWidth="25.938vw"
              hasBasicWidth="300px"
              haswidth="498px"
              hasheight="88px"
              hasfontsize="clamp(16px, 1.042vw, 20px)"
              className="second-section-womens-youth"
            />
          </StyledButtonsWrapper>
        </StyledRightWrapper>
      </StyledMeetsFormwomens>
    </Container>
  );
};

export default MeetsFormwomens;
