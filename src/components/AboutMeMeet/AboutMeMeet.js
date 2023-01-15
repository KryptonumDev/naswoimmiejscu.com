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
          <StyledTitleWrapperElement>
            {data.tytul ? parse(data.tytul) : null}
          </StyledTitleWrapperElement>
          <StyledDescWrapperElement>
            {data.opis ? parse(data.opis) : null}
          </StyledDescWrapperElement>
          <Button
            btnData={data.przycisk}
            variant="green"
            haswidth="355px"
            hasheight="88px"
            hasfontsize="20px"
          />
        </StyledContentWrapper>
      </StyledAboutMeMeet>
    </Container>
  );
};

export default AboutMeMeet;
