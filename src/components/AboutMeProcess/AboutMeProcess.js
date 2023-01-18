import React from "react";
import parse from "html-react-parser";

import Container from "../Container/Container";
import Image from "../Image/Image";
import BigGreenCircle from "../BigGreenCircle/BigGreenCircle";

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
  StyledMobileCircle,
} from "./StyledAboutMeProcess";
import { StyledCircle } from "../Circle/StyledCircle";

const AboutMeProcess = ({ data }) => {
  return (
    <Container>
      <StyledAboutMeProcess>
        <StyledContent>
          <StyledTextWrapper>
            <StyledTitleWrapperElement className="about-me-proccess">
              {data.procesWspolpracyTytul
                ? parse(data.procesWspolpracyTytul)
                : null}
            </StyledTitleWrapperElement>
            <StyledDescWrapperElement className="about-me-proccess">
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
            <StyledTitleWrapperElement className="about-me-proccess" ishide>
              {data.procesWspolpracyTytul
                ? parse(data.procesWspolpracyTytul)
                : null}
            </StyledTitleWrapperElement>
            <Image
              imageDesktop={data.zdjeciePoPrawo}
              imageMobile={data.zdjeciePoPrawoMobile}
            />
            <StyledMobileCircle>
              <BigGreenCircle />
            </StyledMobileCircle>
          </StyledImageWrapper>
        </StyledContent>
        <StyledButtonsWrapper>
          <StyledButtonWrapper hideimage>
            <Image imageDesktop={data.ikonkaKobiet} objectFit="contain" />
            <StyledButtonElement
              btnData={data.przyciskKobiety}
              variant="green"
              hasheight="88px"
              hasfontsize="20px"
              haswidth="495px"
              className="about-me-proccess-btn"
            />
          </StyledButtonWrapper>
          <StyledButtonWrapper bigsizeicon>
            <Image imageDesktop={data.ikonkaMlodejOsoby} objectFit="contain" />
            <StyledButtonElement
              btnData={data.przyciskMlodeOsoby}
              variant="white"
              hasheight="88px"
              hasfontsize="20px"
              haswidth="570px"
              className="about-me-proccess-btn"
            />
          </StyledButtonWrapper>
        </StyledButtonsWrapper>
      </StyledAboutMeProcess>
    </Container>
  );
};

export default AboutMeProcess;
