import styled from "styled-components";

export const StyledFAQElement = styled.details`
  width: 100%;
  max-width: 800px;

  &[open] {
    svg {
      transform: rotateZ(180deg);
    }
  }

  @media only screen and (max-width: 992px) {
    max-width: unset;
  }

  @media only screen and (max-width: 420px) {
    summary::-webkit-details-marker {
      display: none;
    }
  }
`;

export const StyledQuestionWrapper = styled.summary`
  display: flex;
  gap: 17px;

  @media only screen and (max-width: 992px) {
    // align-items: ${({ open }) => (open ? "flex-start" : "center")};
    align-items: center;
  }
`;

export const StyledAnswerWrapper = styled.div`
  font: 300 1.25vw Roboto;
  margin-top: 24px;

  strong {
    font-weight: 500;
  }

  @media only screen and (max-width: 1499px) {
    font-size: 1.601vw;
  }

  @media only screen and (max-width: 992px) {
    font-size: 2.419vw;
  }

  @media only screen and (max-width: 696px) {
    font-size: 3.448vw;
  }

  @media only screen and (max-width: 360px) {
    font-size: 4.167vw;
  }
`;

export const StyledIconWrapper = styled.div``;

export const StyledQuestionContent = styled.div`
  font: 700 1.875vw Roboto;
  cursor: pointer;

  @media only screen and (max-width: 992px) {
    font-size: ${({ open, isnormalfont }) =>
      open ? (isnormalfont ? "4.444vw" : "8.889vw") : "4.444vw"};
  }
`;
