import styled from "styled-components";
import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";

export const StyledAboutMeMeet = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 184px;
  align-items: center;
  gap: 40px;

  @media only screen and (max-width: 992px) {
    margin-top: 66px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const StyledImageWrapper = styled.div`
  max-width: 606px;
  width: 50%;
  position: relative;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledContentWrapper = styled.div`
  width: 50%;
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
    margin-bottom: 45px;
    margin-top: 68px;
    display: ${({ ishide }) => (ishide ? "block" : "none")};
  }
`;
