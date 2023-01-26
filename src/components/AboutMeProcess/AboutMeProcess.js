import React from "react";
import parse from "html-react-parser";

import Container from "../Container/Container";
import Image from "../Image/Image";
import BigGreenCircle from "../BigGreenCircle/BigGreenCircle";
import WhiteCircle from "../WhiteCircle/WhiteCircle";

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
  StyledWhiteDesktopCircle,
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
            <StyledWhiteDesktopCircle>
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
                  strokeWidth="71"
                />
              </svg>
            </StyledWhiteDesktopCircle>
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
              hasBasicWidth="300px"
              hasClampWidth="25.781vw"
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
              hasClampWidth="25.781vw"
              hasBasicWidth="300px"
              className="about-me-proccess-btn"
            />
          </StyledButtonWrapper>
        </StyledButtonsWrapper>
      </StyledAboutMeProcess>
    </Container>
  );
};

export default AboutMeProcess;
