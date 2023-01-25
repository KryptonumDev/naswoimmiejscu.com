import styled from "styled-components";
import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";

export const StyledAboutMeMeet = styled.div`
  width: 100%;
  display: flex;
  margin-top: clamp(120px, 9.583vw, 184px);
  align-items: center;
  gap: clamp(100px, 8.802vw, 169px);

  @media only screen and (max-width: 992px) {
    margin-top: 75px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const StyledImageWrapper = styled.div`
  max-width: 606px;
  width: 40%;
  position: relative;

  .gatsby-image-wrapper {
    width: 100%;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
  }

  @media only screen and (max-width: 360px) {
    width: 88%;
    margin: 0 auto;
  }
`;

export const StyledContentWrapper = styled.div`
  width: 60%;
  max-width: 805px;

  @media only screen and (max-width: 992px) {
    width: 100%;
    max-width: unset;
  }
`;

export const StyledTopCircle = styled.div`
  position: absolute;
  z-index: 1;
  top: -45px;
  left: -45px;

  @media only screen and (max-width: 992px) {
    top: -21px;
    left: -21px;

    div {
      width: 42px;
      height: 42px;
    }
  }
`;

export const StyledBottomCircle = styled.div`
  position: absolute;
  z-index: 1;
  bottom: -45px;
  right: -45px;

  @media only screen and (max-width: 992px) {
    bottom: -21px;
    right: -21px;

    div {
      width: 42px;
      height: 42px;
    }
  }
`;

export const StyledDescWrapperElement = styled(StyledDescWrapper)`
  em {
    font-size: 16px;
    font-style: normal;
  }
`;

export const StyledTitleWrapperElement = styled(StyledTitleWrapper)`
  margin-top: 0;
  display: ${({ ishide }) => (ishide ? "none" : "block")};

  @media only screen and (max-width: 992px) {
    margin-bottom: 26px;
    margin-top: 68px;
    display: ${({ ishide }) => (ishide ? "block" : "none")};
  }
`;

export const StyledMobileWhiteCircle = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    width: 77.283vw;
    height: 77.283vw;
    position: absolute;
    right: -50.403vw;
    top: -12.097vw;
    z-index: -1;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 360px) {
    top: -32vw;
    right: -57vw;
    width: 108.056vw;
    height: 108.056vw;
  }
`;
