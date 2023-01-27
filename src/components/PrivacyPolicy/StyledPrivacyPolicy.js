import styled from "styled-components";

export const StyledPrivacyPolicy = styled.div`
  margin-top: clamp(100px, 8.646vw, 166px);
  margin-bottom: clamp(120px, 9.792vw, 188px);
  position: relative;
  width: 100%;

  @media only screen and (max-width: 1167px) {
    margin-top: 38px;
  }
`;

export const StyledTitleWrapper = styled.div`
  font: 700 clamp(48px, 3.333vw, 64px) / 1.2em Roboto;

  @media only screen and (max-width: 540px) {
    font-size: clamp(22px, 7.037vw, 38px);
  }
`;

export const StyledDescWrapper = styled.div`
  width: 100%;
  margin-top: clamp(70px, 5.365vw, 103px);
  font: 300 26px/1.2em Roboto;
  margin-left: clamp(100px, 15.677vw, 301px);
  max-width: 754px;

  h2 {
    font-size: 40px;
    font-wieght: bold;
  }

  strong {
    font-wieght: 700;
  }

  ol,
  ul {
    margin-left: 25px;
  }

  @media only screen and (max-width: 1167px) {
    margin-left: 0;
    max-width: unset;
  }

  @media only screen and (max-width: 656px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 540px) {
    h2 {
      font-size: clamp(18px, 7.037vw, 34px);
    }
  }

  @media only screen and (max-width: 360px) {
    font-size: 15px;

    h2 {
      font-size: 18px;
    }
  }
`;

export const StyledWhiteCircle = styled.div`
  position: absolute;
  top: 12%;
  left: -60%;
  z-index: -1;

  @media only screen and (max-width: 1628px) {
    width: 47.543vw;
    height: 47.543vw;
    left: -40vw;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 1167px) {
    right: -90px;
    left: auto;
    width: 92.843vw;
    height: 92.843vw;
    top: 80vw;
    right: -60vw;
  }

  @media only screen and (max-width: 516px) {
    width: 178.488vw;
    height: 178.488vw;
    right: -120vw;
    top: 150vw;
  }
`;

export const StyledGreenCircle = styled.div`
  position: absolute;
  right: 100px;
  bottom: 10%;
  z-index: -1;

  @media only screen and (max-width: 1440px) {
    display: none;
  }
`;

export const StyledBrownCircle = styled.div`
  position: absolute;
  right: 100px;
  top: 10%;
  z-index: -1;

  @media only screen and (max-width: 1540px) {
    right: -100px;
  }

  @media only screen and (max-width: 1248px) {
    right: -150px;
  }

  @media only screen and (max-width: 1167px) {
    right: -90px;
  }
`;

export const StyledBigGreenCircle = styled.div`
  position: absolute;
  top: 44%;
  right: -50%;
  z-index: -1;

  @media only screen and (max-width: 1628px) {
    width: 44.287vw;
    height: 44.287vw;
    top: 74vw;
    right: -40vw;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 1167px) {
    display: none;
  }
`;

export const StyledCirclesWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 66px;

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const StyledMobileCircle = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    width: 100%;
    margin-top: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
