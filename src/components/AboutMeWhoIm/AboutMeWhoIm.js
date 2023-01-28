import React from "react";
import parse from "html-react-parser";

import Container from "../Container/Container";
import Image from "../Image/Image";
import Button from "../Button/Button";
import BiggerAnimate from "../BiggerAnimate/BiggerAnimate";

import { StyledCircle } from "../Circle/StyledCircle";
import {
  StyledAboutMeWhoIm,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledTitleWrapperElement,
  StyledDescWrapperElement,
  StyledCircleWrapper,
} from "./StyledAboutMeWhoIm";

const AboutMeWhoIm = ({ data }) => {
  return (
    <Container>
      <StyledAboutMeWhoIm>
        <StyledLeftWrapper>
          <StyledTitleWrapperElement className="who-im-about-me" ishide>
            {data.tytul ? parse(data.tytul) : null}
            <BiggerAnimate />
          </StyledTitleWrapperElement>
          <StyledCircleWrapper>
            <StyledCircle hasdeclaredwidth="209px" hasdeclaredheight="209px" />
          </StyledCircleWrapper>
          <Image
            imageDesktop={data.zdjeciePoLewo}
            imageMobile={data.zdjeciePoLewoMobile}
          />
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledTitleWrapperElement className="who-im-about-me">
            {data.tytul ? parse(data.tytul) : null}
            <BiggerAnimate />
          </StyledTitleWrapperElement>
          <StyledDescWrapperElement className="who-im-about-me">
            {data.opis ? parse(data.opis) : null}
          </StyledDescWrapperElement>
          <Button
            btnData={data.przycisk}
            variant="green"
            haswidth="355px"
            hasheight="88px"
            hasfontsize="20px"
            className="abotu-me-who-im"
            ariaLabel="link"
          />
        </StyledRightWrapper>
      </StyledAboutMeWhoIm>
    </Container>
  );
};

export default AboutMeWhoIm;
