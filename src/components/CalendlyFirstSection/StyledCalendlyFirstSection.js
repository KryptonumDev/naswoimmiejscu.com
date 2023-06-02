import styled from "styled-components";

export const StyledCalendlyFirstSection = styled.div`
  display: flex;
  width: 100%;
  gap: clamp(30px, 8.438vw, 162px);
  justify-content: space-between;
  align-items: center;
  margin-top: clamp(40px, 7.24vw, 135px);

  @media only screen and (max-width: 1167px) {
    margin-top: 22px;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 20px;
    align-items: flex-start;
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
  align-self: flex-start;

  .gatsby-image-wrapper {
    height: 100%;
  }

  @media only screen and (max-width: 992px) {
    width: 80%;
  }

  @media only screen and (max-width: 630px) {
    width: 100%;
  }
`;

export const StyledList = styled.div`
  font: 300 1.354vw/1.33em Roboto;
  color: var(--normalBlack);
  margin-bottom: clamp(20px, 2.917vw, 56px);

  @media only screen and (min-width: 1920px) {
    font-size: 26px;
  }

  ul {
    li {
      display: flex;
      align-items: center;
      gap: 13px;
      list-style-type: none;
      padding-top: 16px;

      em {
        font-variant-numeric: normal;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 1px solid var(--normalGreen);
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 0;
        font-style: normal;
        font-size: 1rem;
        font-weight: 600;
      }

      p {
        color: var(--normalBlack);
      }

      strong {
        width: calc(100% - 56px);
        color: var(--normalBlack);
        font-weight: 300;
      }
    }
  }

  @media only screen and (max-width: 1763px) {
    font-size: 1.248vw;
  }

  @media only screen and (max-width: 1499px) {
    font-size: 1.334vw;
  }

  @media only screen and (max-width: 1349px) {
    font-size: 1.734vw;
  }

  @media only screen and (max-width: 992px) {
    font-size: 2.218vw;
  }

  @media only screen and (max-width: 808px) {
    font-size: 2.9vw;
  }

  @media only screen and (max-width: 528px) {
    font-size: clamp(14px, 3.009vw, 18px);
  }
`;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  bottom: -50px;
  z-index: 2;
  right: -50px;
`;

export const StyledMobileCircle = styled.div`
  display: none;
  position: absolute;
  top: -15px;
  left: -15px;
  z-index: 1;

  @media only screen and (max-width: 992px) {
    display: block;
  }
`;

export const StyledBigWhiteCircle = styled.div`
  position: absolute;
  width: clamp(600px, 40.313vw, 774px);
  height: clamp(600px, 40.313vw, 774px);
  z-index: -1;
  right: -20.833vw;
  top: 10.417vw;

  @media only screen and (min-width: 1920px) {
    right: -400px;
    top: 200px;
  }

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const StyledBottomElement = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: clamp(30px, 4.896vw, 94px);
  gap: clamp(30px, 4.896vw, 94px);
  justify-content: space-between;

  > div {
    &:first-child {
      max-width: 793px;
    }

    width: 49%;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      width: 100%;
    }
  }
`;
