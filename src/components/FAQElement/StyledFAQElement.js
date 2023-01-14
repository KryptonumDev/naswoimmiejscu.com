import styled from "styled-components";

export const StyledFAQElement = styled.details`
  width: 100%;
  max-width: 743px;

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
`;

export const StyledAnswerWrapper = styled.div`
  font: 300 24px Roboto;
  margin-top: 24px;

  strong {
    font-weight: 500;
  }
`;

export const StyledIconWrapper = styled.div``;

export const StyledQuestionContent = styled.div`
  font: 700 40px Roboto;
  cursor: pointer;

  @media only screen and (max-width: 992px) {
    font-size: 32px;
  }
`;
