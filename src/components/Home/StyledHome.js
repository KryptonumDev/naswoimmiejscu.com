import styled from "styled-components";

export const StyledHome = styled.main`
  position: relative;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  top: 190px;
  width: 982px;
  height: 982px;
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
  top: 1600px;
  width: 982px;
  height: 982px;
  right: -300px;

  > svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 1167px) {
    display: none;
  }
`;

export const StyledWhiteCircleWrapper = styled.div`
  position: absolute;
  top: 2500px;
  width: 982px;
  height: 982px;
  left: -960px;
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
