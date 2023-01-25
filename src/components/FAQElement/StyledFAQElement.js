import styled from "styled-components";

export const StyledFAQElement = styled.details`
  width: 100%;

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--hoverGreen);
    outline-offset: 4px;
  }

  &[open] {
    svg {
      transform: rotateZ(-90deg);
    }
  }

  @media only screen and (max-width: 992px) {
    max-width: unset;
    margin-left: -5px;

    &[open] {
      svg {
        transform: rotateZ(180deg);
      }
    }
  }

  @media only screen and (max-width: 420px) {
    summary::-webkit-details-marker {
      display: none;
    }
  }
`;

export const StyledQuestionWrapper = styled.summary`
  display: flex;
  align-items: center;
  gap: 3px;
  transform: translateX(-10px);

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--hoverGreen);
    outline-offset: 4px;
  }

  @media only screen and (max-width: 992px) {
    // align-items: ${({ open }) => (open ? "flex-start" : "center")};
    align-items: center;
  }
`;

export const StyledAnswerWrapper = styled.div`
  font: 300 clamp(20px, 1.25vw, 24px) Roboto;
  margin-top: 24px;

  strong {
    font-weight: 500;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 1499px) {
    font-size: 1.601vw;
  }

  @media only screen and (max-width: 992px) {
    font-size: 2.218vw;
    margin-left: 4px;
    margin-top: 2px;
  }

  @media only screen and (max-width: 696px) {
    font-size: 3.4vw;
  }

  @media only screen and (max-width: 360px) {
    font-size: 4.167vw;
  }
`;

export const StyledIconWrapper = styled.div`
  width: 71px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 75%;
    height: 75%;
  }

  @media only screen and (max-width: 992px) {
    svg {
      width: 26px;
      height: 26px;
    }
  }
`;

export const StyledQuestionContent = styled.div`
  font: 700 clamp(32px, 2.083vw, 40px) Roboto;
  cursor: pointer;

  @media only screen and (min-width: 1920px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 992px) {
    font-size: ${({ open, isnormalfont }) =>
      open ? (isnormalfont ? "3.0vw" : "4.0vw") : "3.0vw"};
  }

  @media only screen and (max-width: 688px) {
    font-size: ${({ open, isnormalfont }) =>
      open ? (isnormalfont ? "3.0vw" : "3.6vw") : "3.0vw"};
  }

  @media only screen and (max-width: 460px) {
    font-size: ${({ open, isnormalfont }) =>
      open ? (isnormalfont ? "3.8vw" : "4.4vw") : "3.8vw"};
  }

  @media only screen and (max-width: 360px) {
    font-size: ${({ open, isnormalfont }) =>
      open ? (isnormalfont ? "4.167vw" : "5.889vw") : "4.167vw"};
  }
`;
