import styled from "styled-components";
import { StyledDescWrapper } from "../HomeHeroSection/StyledHomeHeroSection";

export const StyledHomeContact = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 90px auto 0;
  padding: 0 0 0 183px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: clamp(100px, 8.698vw, 200px);

  @media only screen and (max-width: 1167px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 992px) {
    gap: 0;
  }
`;

export const StyledLeftWrapper = styled.div`
  padding-left: 30px;

  @media only screen and (max-width: 1167px) {
    padding-left: 33px;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledRightWrapper = styled.div``;

export const StyledImageWrapper = styled.div`
  transform: translateX(-30px);
  height: 32.708vw;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 1167px) {
    transform: translateX(0);
  }

  @media only screen and (max-width: 992px) {
    height: 296px;
  }
`;

export const StyledDescWrapperEdit = styled(StyledDescWrapper)`
  max-width: 790px;

  @media only screen and (max-width: 992px) {
    padding-right: 33px;
  }
`;

export const StyledCircleWrapper = styled.div`
  width: 21.875vw;
  height: 21.875vw;
  position: absolute;
  top: 26.208vw;
  left: -6.25vw;
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 1539px) {
    top: 35.208vw;
    left: -3.25vw;
  }

  @media only screen and (max-width: 1310px) {
    top: 43.208vw;
    left: 0;
  }

  @media only screen and (max-width: 1167px) {
    top: 470px;
    left: -140px;
  }

  @media only screen and (max-width: 992px) {
    top: 290px;
    left: -9.145vw;
  }

  @media only screen and (max-width: 657px) {
    width: 199px;
    height: 199px;
    left: -90px;
    top: 310px;
  }

  @media only screen and (max-width: 529px) {
    top: 280px;
  }

  @media only screen and (max-width: 422 px) {
    top: 300px;
  }

  @media only screen and (max-width: 360px) {
    top: 260px;
  }
`;
