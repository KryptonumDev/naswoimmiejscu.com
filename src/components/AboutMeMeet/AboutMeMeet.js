import React from "react";
import parse from "html-react-parser";

import Container from "../Container/Container";
import Image from "../Image/Image";
import Button from "../Button/Button";

import {
  StyledAboutMeMeet,
  StyledImageWrapper,
  StyledContentWrapper,
  StyledTopCircle,
  StyledBottomCircle,
  StyledDescWrapperElement,
  StyledTitleWrapperElement,
} from "./StyledAboutMeMeet";
import { StyledCircle } from "../Circle/StyledCircle";

const AboutMeMeet = ({ data }) => {
  return (
    <Container>
      <StyledAboutMeMeet>
        <StyledTitleWrapperElement className="about-me-meet" ishide>
          {data.tytul ? parse(data.tytul) : null}
        </StyledTitleWrapperElement>
        <StyledImageWrapper>
          <StyledTopCircle>
            <StyledCircle />
          </StyledTopCircle>
          <Image
            imageDesktop={data.zdjeciePoLewo}
            imageMobile={data.zdjeciePoLewoMobile}
          />
          <StyledBottomCircle>
            <StyledCircle hasdeclaredbg="var(--normalGreen)" />
          </StyledBottomCircle>
        </StyledImageWrapper>
        <StyledContentWrapper>
          <StyledTitleWrapperElement className="about-me-meet">
            {data.tytul ? parse(data.tytul) : null}
          </StyledTitleWrapperElement>
          <StyledDescWrapperElement className="about-me-meet">
            {data.opis ? parse(data.opis) : null}
          </StyledDescWrapperElement>
          <Button
            btnData={data.przycisk}
            variant="green"
            haswidth="355px"
            hasheight="88px"
            hasfontsize="20px"
            className="about-me-meet-btn"
          />
        </StyledContentWrapper>
      </StyledAboutMeMeet>
    </Container>
  );
};

export default AboutMeMeet;
