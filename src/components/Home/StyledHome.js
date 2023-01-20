import styled from "styled-components";

export const StyledHome = styled.main`
  position: relative;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  top: 9.896vw;
  width: 51.146vw;
  height: 51.146vw;
  left: -286px;
  z-index: -1;

  > svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 1920px) {
    top: 9.375vw;
    width: 978px;
    height: 978px;
  }

  @media only screen and (max-width: 1167px) {
    display: none;
  }
`;

export const StyledGreenCircleWrapper = styled.div`
  position: absolute;
  top: 79.333vw;
  width: 51.146vw;
  height: 51.146vw;
  right: -25vw;

  > svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 1920px) {
    top: 1500px;
    width: 978px;
    height: 978px;
    right: -480px;
  }

  @media only screen and (max-width: 1330px) {
    top: 96.333vw;
  }

  @media only screen and (max-width: 1167px) {
    display: none;
  }
`;

export const StyledWhiteCircleWrapper = styled.div`
  position: absolute;
  top: 130.208vw;
  width: 51.146vw;
  height: 51.146vw;
  left: -41.667vw;
  z-index: -1;

  > svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 1920px) {
    top: 2500px;
    width: 978px;
    height: 978px;
    left: -800px;
  }

  @media only screen and (max-width: 1167px) {
    display: none;
  }
`;

export const StyledWhiteSecondCircleWrapper = styled.div`
  position: absolute;
  top: clamp(4200px, 248.958vw, 5000px);
  width: 51.146vw;
  height: 51.146vw;
  right: -29.167vw;
  z-index: -1;

  > svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 1920px) {
    top: 4780px;
    width: 982px;
    height: 982px;
    right: -560px;
  }

  @media only screen and (max-width: 1552px) {
    top: clamp(4000px, 230.958vw, 4800px);
  }

  @media only screen and (max-width: 1349px) {
    top: clamp(4600px, 230.958vw, 4800px);
  }

  @media only screen and (max-width: 1167px) {
    display: none;
  }

  @media only screen and (max-width: 992px) {
    display: block;
    right: auto;
    left: -30.242vw;
    top: 154.903vw;
    width: 46.875vw;
    height: 46.875vw;
  }

  @media only screen and (max-width: 360px) {
    top: 210.903vw;
    left: -80vw;
    width: 129.167vw;
    height: 129.167vw;
  }
`;
