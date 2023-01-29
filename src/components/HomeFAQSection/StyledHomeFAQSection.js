import styled from "styled-components";

export const StyledHomeFAQSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: clamp(100px, 8.333vw, 160px) auto 0;
  padding: 0 clamp(100px, 6.51vw, 125px) 0 clamp(100px, 9.375vw, 180px);
  max-width: 1920px;
  gap: 40px;

  @media only screen and (max-width: 1167px) {
    padding: 0 33px;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 16px;
    margin-top: 55px;
  }
`;

export const StyledTextWrapper = styled.div`
  width: 45%;
  font: 700 3.333vw/1.2em Roboto;
  display: flex;
  align-items: center;
  gap: 40px;
  padding-left: 40px;
  position: relative;

  p {
    max-width: 475px;
    position: absolute;
    top: 250px;
    left: 40px;

    strong {
      color: var(--nromalBrown);
      font-weight: 700;
    }
  }

  @media only screen and (min-width: 1920px) {
    font-size: 64px;
  }

  @media only screen and (max-width: 1763px) {
    font-size: 52px;
  }

  @media only screen and (max-width: 1499px) {
    font-size: 42px;
  }

  @media only screen and (max-width: 1349px) {
    font-size: 32px;
  }

  @media only screen and (max-width: 1167px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 992px) {
    font-size: 42px;
    width: 100%;

    p {
      position: relative;
      top: auto;
      left: auto;
      max-width: unset;
    }
  }

  @media only screen and (max-width: 528px) {
    font-size: 32px;
  }
`;

export const StyledFAQWrapper = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: clamp(36px, 2.656vw, 51px);

  @media only screen and (max-width: 992px) {
    margin-top: 0;
    padding-left: 0;
    width: 100%;
    gap: 19px;
  }
`;

export const StyledMobileSubHeading = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    font: 300 20px Roboto;
    margin-bottom: 32px;

    strong {
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 528px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 360px) {
    font-size: 15px;
  }
`;

export const StyledTitle = styled.div`
  font: 700 clamp(44px, 3.333vw, 64px) Roboto;
  margin-bottom: calc(64px - clamp(19px, 2.188vw, 42px));

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;
