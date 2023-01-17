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
          <StyledTitleWrapper>
            {data.tytulStrony ? parse(data.tytulStrony) : null}
          </StyledTitleWrapper>
          <StyledDescWrapper>
            {data.opis ? parse(data.opis) : null}
          </StyledDescWrapper>
          <Button
            btnData={data.przycisk}
            variant="green"
            haswidth="495px"
            hasheight="88px"
            hasfontsize="20px"
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
