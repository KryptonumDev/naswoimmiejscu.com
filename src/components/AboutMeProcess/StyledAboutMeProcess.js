import styled from "styled-components";
import Button from "../Button/Button";

import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";

export const StyledAboutMeProcess = styled.div`
  width: 100%;
  margin-top: 94px;
  padding-right: 150px;
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledTextWrapper = styled.div`
  max-width: 650px;
  padding-left: 80px;
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  margin-top: 100px;
`;

export const StyledButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 61px;
  padding-left: 80px;
  margin-top: 30px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;

  .gatsby-image-wrapper {
    width: ${({ bigsizeicon }) => (bigsizeicon ? "69px" : "53px")};
    height: ${({ bigsizeicon }) => (bigsizeicon ? "69px" : "53px")};
  }
`;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  right: -88px;
  top: -88px;
  z-index: 1;
`;

export const StyledTitleWrapperElement = styled(StyledTitleWrapper)`
  margin-top: 0;
`;

export const StyledDescWrapperElement = styled(StyledDescWrapper)``;

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
`;
