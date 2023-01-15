import styled from "styled-components";
import { StyledDescWrapper } from "../HomeHeroSection/StyledHomeHeroSection";

export const StyledHomeContact = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 90px auto 0;
  padding: 0 0 0 183px;
  display: flex;
  justify-content: space-between;
  position: relative;
  gap: 40px;

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

  @media only screen and (max-width: 1167px) {
    transform: translateX(0);
  }
`;

export const StyledDescWrapperEdit = styled(StyledDescWrapper)`
  max-width: 790px;

  @media only screen and (max-width: 992px) {
    padding-right: 33px;
  }
`;

export const StyledCircleWrapper = styled.div`
  width: 420px;
  height: 420px;
  position: absolute;
  bottom: 100px;
  left: -120px;
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 992px) {
    bottom: auto;
    top: 330px;
    left: -180px;
  }

  @media only screen and (max-width: 657px) {
    width: 199px;
    height: 199px;
    left: -90px;
    top: 400px;
  }

  @media only screen and (max-width: 529px) {
    top: 321px;
  }

  @media only screen and (max-width: 380px) {
    top: 300px;
  }

  @media only screen and (max-width: 360px) {
    top: 260px;
  }
`;
