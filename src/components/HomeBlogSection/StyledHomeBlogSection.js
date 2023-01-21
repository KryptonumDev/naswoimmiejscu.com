import styled from "styled-components";
import {
  StyledTitleWrapper,
  StyledDescWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";

export const StyledHomeBlogSection = styled.div`
  width: 100%;
  display: flex;
  padding-left: 185px;
  max-width: 1920px;
  margin: 0 auto;

  @media only screen and (max-width: 1167px) {
    padding-left: 33px;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;
  border-right: 1px solid var(--hrColor);
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 992px) {
    width: 100%;
    position: relative;
  }
`;

export const StyledRightWrapper = styled.div`
  margin-top: 3.6vw;
  width: 50%;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledTitleElement = styled(StyledTitleWrapper)`
  margin-top: 27px;

  @media only screen and (max-width: 992px) {
    position: relative;
    z-index: 1;
  }
`;

export const StyledDescWrapper2 = styled(StyledDescWrapper)`
  margin-top: 27px;
  text-align: ${({ isleft }) => (isleft ? "left" : "right")};
  max-width: 623px;
  position: relative;
  z-index: 1;

  strong {
    font-weight: 600;
  }

  @media only screen and (max-width: 992px) {
    text-align: left;
    margin-top: 44px;
  }
`;

export const StyledContent = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: ${({ isright }) => (isright ? "flex-end" : "flex-start")};
  align-self: ${({ isright }) => (isright ? "flex-end" : "flex-start")};
  padding: ${({ hasdeclaredpadding }) =>
    hasdeclaredpadding ? hasdeclaredpadding : "0"};
  opacity: ${({ isactive }) => (isactive ? "1" : "0.5")};

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--normalGreen);
    outline-offset: 4px;
  }

  @media only screen and (max-width: 992px) {
    align-items: flex-start;
    align-self: flex-start;
    position: relative;
    margin-top: ${({ isright }) => (isright ? "64px" : "0")};
  }
`;

export const StyledIconWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    position: absolute;
    top: 140px;
    left: 0;
  }
`;

export const StyledBlogSliderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    padding-right: clamp(40px, 7.917vw, 152px);
    overflow-y: hidden;
    max-height: 800px;

    &:after {
      content: "";
      width: 100%;
      height: 450px;
      background: rgb(255, 255, 255);
      background: linear-gradient(to top, #fff, transparent);
      bottom: 0;
      left: 0;
      position: absolute;

      @media only screen and (max-width: 992px) {
        display: none;
      }
    }

    .slick-slider {
      width: 100%;
    }

    // .slick-slide {
    //   margin: 20px 0;
    // }

    @media only screen and (max-width: 992px) {
      align-items: flex-start;
    }
  }

  @media only screen and (max-width: 1167px) {
    padding-right: 33px;
  }

  @media only screen and (max-width: 992px) {
    align-items: flex-start;
  }

  @media only screen and (max-width: 604px) {
    padding-right: 0;
    min-width: 604px;
  }
`;

export const StyledRecomendationSliderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
