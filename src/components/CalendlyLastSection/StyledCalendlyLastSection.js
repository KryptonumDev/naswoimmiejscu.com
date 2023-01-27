import styled from "styled-components";

export const StyledCalendlyLastSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: clamp(70px, 4.635vw, 89px);
  margin-bottom: clamp(160px, 9.115vw, 175px);
  gap: clamp(48px, 3.333vw, 64px);
  align-items: center;

  @media only screen and (max-width: 992px) {
    gap: 28px;
    align-items: flex-start;
    flex-direction: column-reverse;
    margin-top: 53px;
    margin-bottom: 62px;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledRightWrapper = styled.div`
  width: 50%;
  position: relative;

  @media only screen and (max-width: 992px) {
    width: 80%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (max-width: 360px) {
    max-heght: 193px;

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }
  }
`;

export const StyledGreenBigCircle = styled.div`
  position: absolute;
  width: 37.552vw;
  height: 37.552vw;
  right: -27.083vw;
  top: 5.208vw;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 1920px) {
    width: 721px;
    height: 721px;
    right: -540px;
    top: 100px;
  }

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;
