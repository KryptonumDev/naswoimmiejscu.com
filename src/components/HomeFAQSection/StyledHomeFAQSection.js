import styled from "styled-components";

export const StyledHomeFAQSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 160px auto 0;
  padding: 0 125px 0 180px;
  max-width: 1920px;
  gap: clamp(100px, 8.698vw, 200px);

  @media only screen and (max-width: 1167px) {
    padding: 0 33px;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const StyledTextWrapper = styled.div`
  width: 50%;
  font: 700 64px Roboto;
  display: flex;
  align-items: center;
  padding-left: 45px;
  gap: 40px;

  p {
    max-width: 475px;

    strong {
      color: var(--nromalBrown);
      font-weight: 700;
    }
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
      max-width: unset;
    }
  }

  @media only screen and (max-width: 528px) {
    font-size: 32px;
  }
`;

export const StyledFAQWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 55px;
  padding-left: 20px;

  @media only screen and (max-width: 992px) {
    margin-top: 35px;
    padding-left: 0;
    width: 100%;
  }
`;

export const StyledMobileSubHeading = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    margin-top: 16px;
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
