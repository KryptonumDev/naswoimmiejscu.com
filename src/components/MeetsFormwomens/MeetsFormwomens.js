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
}) => {
  return (
    <Container>
      <StyledMeetsFormwomens>
        <StyledLeftWrapper>
          <StyledCircleWrapper>
            <StyledCircle />
          </StyledCircleWrapper>
          <Image imageDesktop={image} imageMobile={imageMobile} />
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledTitleWrapper>{title ? parse(title) : null}</StyledTitleWrapper>
          <StyledDescWrapper>{desc ? parse(desc) : null}</StyledDescWrapper>
          <StyledButtonsWrapper>
            <Button
              btnData={firstBtn}
              variant="green"
              hasheight="88px"
              hasfontsize="20px"
              haswidth="495px"
            />
            <Button
              btnData={secondBtn}
              variant="white"
              hasheight="88px"
              hasfontsize="20px"
              haswidth="495px"
            />
          </StyledButtonsWrapper>
        </StyledRightWrapper>
      </StyledMeetsFormwomens>
    </Container>
  );
};

export default MeetsFormwomens;
