import styled from "styled-components";
import { StyledTitleWrapper } from "../HomeHeroSection/StyledHomeHeroSection";

export const StyledFirstSecionWomens = styled.div`
  gap: clamp(100px, 7.698vw, 200px);
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  margin-top: 97px;

  @media only screen and (max-width: 992px) {
    gap: 20px;
    flex-direction: column-reverse;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledRightWrapper = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  z-index: 2;

  @media only screen and (max-width: 992px) {
    width: 100%;
    justify-content: flex-start;
    max-width: 80%;
  }

  @media only screen and (max-width: 569px) {
    max-width: unset;
  }
`;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  bottom: -50px;
  right: -50px;
  z-index: 2;

  @media only screen and (max-width: 992px) {
    bottom: -20px;
    right: -20px;

    div {
      width: 40px;
      height: 40px;
    }
  }
`;

export const StyledTitleWrapperElement = styled(StyledTitleWrapper)`
  width: 100%;
  margin-top: 25px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 992px) {
    margin-top: 0;
  }

  @media only screen and (max-width: 768px) {
    .gatsby-image-wrapper {
      width: 30px;
      height: 30px;
    }
  }
`;

export const StyledCirclesWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 30px;
`;

export const StyledWhiteCircle = styled.div`
  position: absolute;
  width: 40.313vw;
  height: 40.313vw;
  z-index: 1;
  bottom: -13.021vw;
  right: -15.625vw;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const StyledMobileCircleWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    position: absolute;
    top: -15px;
    left: -15px;
    z-index: 1;
  }
`;
