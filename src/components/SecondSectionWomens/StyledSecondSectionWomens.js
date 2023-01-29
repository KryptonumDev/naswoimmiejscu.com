import styled from "styled-components";

export const StyledSecondSectionWomens = styled.div`
  gap: clamp(40px, 4.583vw, 88px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: clamp(120px, 9.583vw, 184px);

  @media only screen and (max-width: 992px) {
    gap: 20px;
    flex-direction: column;
    margin-top: 22px;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 40%;
  padding-left: 85px;

  @media only screen and (max-width: 1167px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
  }

  @media only screen and (max-width: 576px) {
    .gatsby-image-wrapper {
      height: 248px;
    }
  }

  @media only screen and (max-width: 360px) {
    .gatsby-image-wrapper {
      height: 248px;
    }
  }
`;

export const StyledRightWrapper = styled.div`
  width: 70%;

  @media only screen and (max-width: 992px) {
    width: 80%;
    position: relative;
    z-index: 2;
  }

  @media only screen and (max-width: 705px){
    width: 100%;
  }
`;

export const StyledGreenCircleWrapper = styled.div`
  position: absolute;
  bottom: -17.042vw;
  left: ${({ iswomens }) => (iswomens ? "-26.458vw" : "-29vw")};
  z-index: 1;
  width: 37.552vw;
  height: 37.552vw;

  svg {
    width: 100%;
    height: 100%;
    color: var(--normalGreen);
  }

  @media only screen and (min-width: 1920px) {
    width: 721px;
    height: 721px;
    bottom: ${({ iswomens }) => (iswomens ? "-320px" : "-280px")};
    left: ${({ iswomens }) => (iswomens ? "-480px" : "-500px")};
  }

  @media only screen and (max-width: 992px) {
    left: auto;
    right: -31.25vw;
    bottom: auto;
    top: 0;

    svg {
      color: ${({ iswomens }) =>
        iswomens ? "var(--normalGreen)" : "var(--normalWhite)"};
    }
  }

  @media only screen and (max-width: 576px) {
    width: 53.125vw;
    height: 53.125vw;
    top: 20vw;
  }

  @media only screen and (max-width: 360px) {
    width: 85vw;
    height: 85vw;
    top: 30vw;
    right: -60vw;
  }
`;
