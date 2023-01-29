import styled from "styled-components";
import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";

export const StyledAboutMeWhoIm = styled.div`
  margin-top: clamp(120px, 9.219vw, 177px);
  display: flex;
  justify-content: space-between;
  gap: clamp(100px, 8.281vw, 159px);
  align-items: center;
  position: relative;
  z-index: 1;

  @media only screen and (max-width: 992px) {
    margin-top: 26px;
    gap: 20px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;
  padding-left: 100px;
  position: relative;

  @media only screen and (max-width: 1499px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
    max-width: 68%;
  }

  @media only screen and (max-width: 769px) {
    padding-right: 70px;
    max-width: 90%;
  }
`;

export const StyledRightWrapper = styled.div`
  max-width: 745px;
  width: 50%;
  position: relative;
  z-index: 2;

  em {
    font-size: 20px/1.2em;
    font-style: normal;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
    max-width: unset;

    em {
      font-size: 2.218vw;
    }
  }

  @media only screen and (max-width: 808px) {
    em {
      font-size: 2.9vw;
    }
  }

  @media only screen and (max-width: 528px) {
    em {
      font-size: 3.409vw;
    }
  }

  @media only screen and (max-width: 360px) {
    em {
      font-size: 4.167vw;
    }
  }
`;

export const StyledTitleWrapperElement = styled(StyledTitleWrapper)`
  display: ${({ ishide }) => (ishide ? "none" : "flex")};
  align-items: center;
  gap: 20px;

  svg {
    padding-top: 10px;
  }

  @media only screen and (max-width: 992px) {
    display: ${({ ishide }) => (ishide ? "flex" : "none")};
    margin: 26px 0;

    svg {
      display: none;
    }
  }
`;

export const StyledDescWrapperElement = styled(StyledDescWrapper)``;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;

  @media only screen and (max-width: 1499px) {
    display: none;
  }

  @media only screen and (max-width: 992px) {
    display: block;
    z-index: 1;
    top: auto;
    bottom: -42px;
    left: auto;
    right: -42px;

    div {
      width: 84px;
      height: 84px;
      background-color: var(--normalGreen);
    }
  }

  @media only screen and (max-width: 768px) {
    right: 5%;
  }
`;
