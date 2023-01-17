import React from "react";
import parse from "html-react-parser";

import Container from "../Container/Container";
import Image from "../Image/Image";

import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";
import {
  StyledCalendlyFirstSection,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledList,
} from "./StyledCalendlyFirstSection";

const CalendlyFirstSection = ({ data }) => {
  return (
    <Container>
      <StyledCalendlyFirstSection>
        <StyledLeftWrapper>
          <StyledTitleWrapper>
            {data.tytulStrony ? parse(data.tytulStrony) : null}
          </StyledTitleWrapper>
          <StyledDescWrapper>
            {data.opisPodTytulem ? parse(data.opisPodTytulem) : null}
          </StyledDescWrapper>
          <StyledList>{data.lista ? parse(data.lista) : null}</StyledList>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <Image
            imageDesktop={data.zdjeciePoPrawo}
            imageMobile={data.zdjeciePoPrawoMobile}
          />
        </StyledRightWrapper>
      </StyledCalendlyFirstSection>
    </Container>
  );
};

export default CalendlyFirstSection;
