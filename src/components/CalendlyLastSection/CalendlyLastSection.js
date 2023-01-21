import React from "react";
import parse from "html-react-parser";

import Button from "../Button/Button";
import Image from "../Image/Image";
import Container from "../Container/Container";

import {
  StyledCircleWrapper,
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";
import {
  StyledCalendlyLastSection,
  StyledLeftWrapper,
  StyledRightWrapper,
} from "./StyledCalendlyLastSection";
import { StyledCircle } from "../Circle/StyledCircle";

const CalendlyLastSection = ({ data }) => {
  return (
    <Container>
      <StyledCalendlyLastSection>
        <StyledLeftWrapper>
          <StyledTitleWrapper className="calendly-last-section">
            {data.tytulStrony ? parse(data.tytulStrony) : null}
          </StyledTitleWrapper>
          <StyledDescWrapper className="calendly-last-section">
            {data.opis ? parse(data.opis) : null}
          </StyledDescWrapper>
          <Button
            btnData={data.przycisk}
            haswidth="495px"
            hasClampWidth="25.781vw"
            className="calenldy-first-section"
            hasheight="88px"
            hasfontsize="clamp(16px, 1.042vw, 20px)"
            hasBasicWidth="300px"
            hasBasicHeight="53px"
          />
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledCircleWrapper>
            <StyledCircle />
          </StyledCircleWrapper>
          <Image
            imageDesktop={data.zdjeciePoPrawo}
            imageMobile={data.zdjeciePoPrawoMobile}
          />
        </StyledRightWrapper>
      </StyledCalendlyLastSection>
    </Container>
  );
};

export default CalendlyLastSection;
