import styled from "styled-components";
import { StyledDescWrapper } from "../HomeHeroSection/StyledHomeHeroSection";

export const StyledHomeContact = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: clamp(70px, 4.688vw, 90px) auto 0;
  padding: 0 0 0 clamp(60px, 6.667vw, 128px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: clamp(50px, 8.958vw, 172px);

  @media only screen and (max-width: 1167px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 992px) {
    gap: 0;
    margin: clamp(33px, 3.327vw, 45px) auto 0;
  }
`;

export const StyledLeftWrapper = styled.div`
  padding-left: 30px;
  position: relative;

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
  max-height: 628px;

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
  top: 50%;
  transform: translateY(-50%);
  left: -15.104vw;
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 1920px) {
    width: 420px;
    height: 420px;
    left: -290px;
    top: 50%;
  }

  @media only screen and (max-width: 824px) {
    width: 30.937vw;
    height: 30.937vw;
    left: -20vw;
  }

  @media only screen and (max-width: 360px) {
    width: 52.5vw;
    height: 52.5vw;
    left: -40vw;
  }
`;
