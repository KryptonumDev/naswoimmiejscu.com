import React from "react";
import parse from "html-react-parser";

import Container from "../Container/Container";
import Image from "../Image/Image";

import {
  StyledAboutMeProcess,
  StyledCircleWrapper,
  StyledButtonWrapper,
  StyledContent,
  StyledTextWrapper,
  StyledImageWrapper,
  StyledButtonsWrapper,
  StyledTitleWrapperElement,
  StyledDescWrapperElement,
  StyledButtonElement,
} from "./StyledAboutMeProcess";
import { StyledCircle } from "../Circle/StyledCircle";

const AboutMeProcess = ({ data }) => {
  return (
    <Container>
      <StyledAboutMeProcess>
        <StyledContent>
          <StyledTextWrapper>
            <StyledTitleWrapperElement>
              {data.procesWspolpracyTytul
                ? parse(data.procesWspolpracyTytul)
                : null}
            </StyledTitleWrapperElement>
            <StyledDescWrapperElement>
              {data.opis ? parse(data.opis) : null}
            </StyledDescWrapperElement>
          </StyledTextWrapper>
          <StyledImageWrapper>
            <StyledCircleWrapper>
              <StyledCircle
                hasdeclaredbg="var(--normalGreen)"
                hasdeclaredwidth="176px"
                hasdeclaredheight="176px"
              />
            </StyledCircleWrapper>
            <Image
              imageDesktop={data.zdjeciePoPrawo}
              imageMobile={data.zdjeciePoPrawoMobile}
            />
          </StyledImageWrapper>
        </StyledContent>
        <StyledButtonsWrapper>
          <StyledButtonWrapper>
            <Image imageDesktop={data.ikonkaKobiet} objectFit="fill" />
            <StyledButtonElement
              btnData={data.przyciskKobiety}
              variant="green"
              hasheight="88px"
              hasfontsize="20px"
            />
          </StyledButtonWrapper>
          <StyledButtonWrapper bigsizeicon>
            <Image imageDesktop={data.ikonkaMlodejOsoby} objectFit="fill" />
            <StyledButtonElement
              btnData={data.przyciskMlodeOsoby}
              variant="white"
              hasheight="88px"
              hasfontsize="20px"
            />
          </StyledButtonWrapper>
        </StyledButtonsWrapper>
      </StyledAboutMeProcess>
    </Container>
  );
};

export default AboutMeProcess;
