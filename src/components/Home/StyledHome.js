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

  @media only screen and (max-width: 1167px) {
    display: none;
  }
`;

export const StyledWhiteSecondCircleWrapper = styled.div`
  position: absolute;
  top: 4980px;
  width: 982px;
  height: 982px;
  right: -660px;
  z-index: -1;

  > svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 1167px) {
    display: none;
  }
`;
