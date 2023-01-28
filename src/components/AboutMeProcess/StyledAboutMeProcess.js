import styled from "styled-components";
import Button from "../Button/Button";

import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";

export const StyledAboutMeProcess = styled.div`
  width: 100%;
  margin-top: clamp(50px, 7.813vw, 94px);
  padding-right: clamp(40px, 7.813vw, 150px);

  @media only screen and (max-width: 1719px) {
    padding-right: clamp(60px, 3.813vw, 110px);
  }

  @media only screen and (max-width: 1499px) {
    padding-right: 0;
  }

  @media only screen and (max-width: 992px) {
    margin-top: 34px;
  }
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: clamp(100px, 8.698vw, 200px);

  @media only screen and (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 20px;
    margin-bottom: 30px;
  }
`;

export const StyledTextWrapper = styled.div`
  max-width: 650px;
  padding-left: 80px;
  width: 50%;

  @media only screen and (max-width: 1499px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
    max-width: unset;
  }
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  margin-top: 100px;

  @media only screen and (max-width: 1499px) {
    margin-top: 60px;
  }

  @media only screen and (max-width: 992px) {
    padding-right: 70px;
    margin-top: 0;
  }

  @media only screen and (max-width: 400px) {
    padding-right: 30px;
  }
`;

export const StyledButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 61px;
  padding-left: 80px;
  margin-top: 42px;

  @media only screen and (max-width: 1550px) {
    gap: 20px;
    padding-left: 0;
  }

  @media only screen and (max-width: 992px) {
    margin-top: 0;
    flex-direction: column;

    button {
      font-size: 20px;
    }
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;

  .gatsby-image-wrapper {
    width: ${({ bigsizeicon }) => (bigsizeicon ? "69px" : "53px")};
    height: ${({ bigsizeicon }) => (bigsizeicon ? "69px" : "53px")};
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;

    img,
    .gatsby-image-wrapper {
      display: ${({ hideimage }) => (hideimage ? "none" : "block")};
      width: 42px;
      height: 42px;
    }
  }
`;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  right: -88px;
  top: -88px;
  z-index: 1;

  @media only screen and (max-width: 992px) {
    top: 70%;
    right: auto;
    left: -32px;

    div {
      width: 76px;
      height: 76px;
      background-color: var(--buttonBrownHover);
    }
  }
`;

export const StyledTitleWrapperElement = styled(StyledTitleWrapper)`
  margin-top: 0;
  margin-bottom: clamp(60px, 4.948vw, 95px);
  display: ${({ ishide }) => (ishide ? "none" : "block")};

  @media only screen and (max-width: 992px) {
    display: ${({ ishide }) => (ishide ? "block" : "none")};
    margin-bottom: 34px;
  }
`;

export const StyledDescWrapperElement = styled(StyledDescWrapper)`
  margin-bottom: 0;
`;

export const StyledButtonElement = styled(Button)`
  width: initial;
  padding: 0 48px;
  color: var(--normalBlack);
  background-color: ${({ variant }) =>
    variant === "white" ? "transparent" : null};
  border: ${({ variant }) =>
    variant === "white" ? "1px solid var(--normalBlack)" : null};
  transition: color 250ms linear, background-color 250ms linear,
    border 250ms linear;

  &:hover {
    color: ${({ variant }) =>
      variant === "white" ? "var(--normalWhite)" : null};
    border-color: ${({ variant }) =>
      variant === "white" ? "var(--normalBrown)" : null};
  }

  @media only screen and (max-width: 424px) {
    padding: 0;
    width: 100%;
  }
`;

export const StyledMobileCircle = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    width: 55.065vw;
    height: 55.065vw;
    position: absolute;
    top: 2%;
    right: -35.145vw;
    z-index: -1;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 360px) {
    width: 91.111vw;
    height: 91.111vw;
    right: -64vw;
  }
`;

export const StyledWhiteDesktopCircle = styled.div`
  width: 40.313vw;
  height: 40.313vw;
  position: absolute;
  right: -32.417vw;
  bottom: -50%;
  z-index: -1;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;
