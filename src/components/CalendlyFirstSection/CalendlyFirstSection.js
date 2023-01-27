import React from "react";
import parse from "html-react-parser";

import Container from "../Container/Container";
import Image from "../Image/Image";
import Button from "../Button/Button";

import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";
import {
  StyledCalendlyFirstSection,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledList,
  StyledCircleWrapper,
  StyledMobileCircle,
  StyledBigWhiteCircle,
} from "./StyledCalendlyFirstSection";
import { StyledCircle } from "../Circle/StyledCircle";

const CalendlyFirstSection = ({ data }) => {
  return (
    <Container>
      <StyledCalendlyFirstSection>
        <StyledLeftWrapper>
          <StyledTitleWrapper className="calendly-first-section">
            {data.tytulStrony ? parse(data.tytulStrony) : null}
          </StyledTitleWrapper>
          <StyledDescWrapper className="calendly-first-section">
            {data.opisPodTytulem ? parse(data.opisPodTytulem) : null}
          </StyledDescWrapper>
          <StyledList>{data.lista ? parse(data.lista) : null}</StyledList>
          <Button
            btnData={data.przycisk}
            variant="green"
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
          <StyledMobileCircle>
            <StyledCircle hasdeclaredwidth="30px" hasdeclaredheight="30px" />
          </StyledMobileCircle>
          <Image
            imageDesktop={data.zdjeciePoPrawo}
            imageMobile={data.zdjeciePoPrawoMobile}
          />
          <StyledCircleWrapper>
            <StyledCircle hasdeclaredbg="var(--normalGreen)" />
          </StyledCircleWrapper>
          <StyledBigWhiteCircle>
            <svg
              width="774"
              height="774"
              viewBox="0 0 774 774"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="387"
                cy="387"
                r="351.5"
                stroke="white"
                stroke-width="71"
              />
            </svg>
          </StyledBigWhiteCircle>
        </StyledRightWrapper>
      </StyledCalendlyFirstSection>
    </Container>
  );
};

export default CalendlyFirstSection;
