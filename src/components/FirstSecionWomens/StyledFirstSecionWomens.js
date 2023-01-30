import styled from "styled-components";
import { StyledTitleWrapper } from "../HomeHeroSection/StyledHomeHeroSection";

export const StyledFirstSecionWomens = styled.div`
  gap: clamp(30px, 5.469vw, 105px);
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  margin-top: clamp(40px, 5.99vw, 115px);

  @media only screen and (max-width: 1167px) {
    margin-top: 6px;
  }

  @media only screen and (max-width: 992px) {
    gap: 20px;
    flex-direction: column-reverse;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;

  @media only screen and (max-width: 992px) {
    width: 100%;
    position: relative;
    z-index: 3;
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
    bottom: ${({ iswomens }) => (iswomens ? "-40px" : "-20px")};
    right: ${({ iswomens }) => (iswomens ? "-40px" : "-20px")};

    div {
      width: ${({ iswomens }) => (iswomens ? "100px" : "40px")};
      height: ${({ iswomens }) => (iswomens ? "100px" : "40px")};
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

    svg {
      max-height: 29px;
    }
  }
`;

export const StyledCirclesWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 30px;

  @media only screen and (max-width: 992px) {
    margin-top: 22px;
  }
`;

export const StyledWhiteCircle = styled.div`
  position: absolute;
  width: 40.313vw;
  height: 40.313vw;
  z-index: 1;
  bottom: ${({ iswomens }) => (iswomens ? "-13.021vw" : "-19vw")};
  right: -15.625vw;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 1920px) {
    width: 774px;
    height: 774px;
    bottom: -360px;
    right: -300px;
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
