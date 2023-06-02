import styled from 'styled-components'

export const StyledFAQElement = styled.details`
  width: 100%;

  svg {
    transition: all 0.25s;
  }

  &:hover {
  }

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--hoverGreen);
    outline-offset: 4px;
  }

  &[open] {
    svg {
      transform: rotateZ(-90deg) !important;
    }
  }

  @media only screen and (max-width: 992px) {
    max-width: 687px;

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
`

export const StyledQuestionWrapper = styled.summary`
  display: flex;
  align-items: center;
  gap: 17px;

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--hoverGreen);
    outline-offset: 4px;
  }

  &:hover {
    svg {
      transform: translateY(2px);
    }
  }

  @media only screen and (max-width: 992px) {
    align-items: center;
  }
`

export const StyledAnswerWrapper = styled.div`
  font: 300 clamp(20px, 1.25vw, 24px) / 1.33em Roboto;
  margin-top: 24px;
  span {
    font-weight: 300 !important;
  }
  p:not(:last-child){
    margin-bottom: 16px;
  }

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
    margin-top: 15px;
  }

  @media only screen and (max-width: 696px) {
    font-size: 3.4vw;
  }

  @media only screen and (max-width: 420px) {
    font-size: clamp(14px, 4.167vw, 16px);
  }
`

export const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 63%;
  }
`

export const StyledQuestionContent = styled.div`
  font: 700 clamp(32px, 2.083vw, 40px) / 1.33em Roboto;
  cursor: pointer;

  @media only screen and (min-width: 1920px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 992px) {
    font-size: ${({ isnormalfont }) => (isnormalfont ? '3.0vw' : '4.0vw')};
  }

  @media only screen and (max-width: 688px) {
    font-size: ${({ isnormalfont }) => (isnormalfont ? '3.0vw' : '3.6vw')};
  }

  @media only screen and (max-width: 460px) {
    font-size: ${({ isnormalfont }) => (isnormalfont ? '3.8vw' : '4.4vw')};
  }

  @media only screen and (max-width: 420px) {
    font-size: ${({ isnormalfont }) =>
      isnormalfont ? 'clamp(16px, 4.167vw, 18px)' : '5.9vw'};
  }
`
