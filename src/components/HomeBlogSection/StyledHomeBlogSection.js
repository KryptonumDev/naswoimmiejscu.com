import styled from "styled-components";
import {
  StyledTitleWrapper,
  StyledDescWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";

export const StyledHomeBlogSection = styled.div`
  width: 100%;
  display: flex;
  padding-left: 185px;
  padding-bottom: 57px;
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
  display: flex;
  flex-direction: column;
  position: relative;

  &:after {
    content: "";
    width: 1px;
    height: 131%;
    background-color: var(--hrColor);
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
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
  margin-bottom: 0;

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
  transition: opacity 250ms linear;

  &:hover {
    opacity: 0.8;
  }

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

export const StyledDesktopScroll = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  gap: 86px;

  &:after {
    content: "";
    width: 100%;
    height: 450px;
    background: rgb(255, 255, 255);
    background: linear-gradient(to top, rgba(255, 255, 255, 0.6), transparent);
    bottom: 174px;
    left: 0;
    position: absolute;
    pointer-events: none;

    @media only screen and (max-width: 992px) {
      display: none;
    }
  }
`;

export const StyledBlogSliderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .slick-slider {
    width: 100%;
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

export const StyledScrollWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: clamp(40px, 7.917vw, 152px);
  max-height: 800px;
  min-height: 800px;
  overflow-y: scroll;
  gap: clamp(20px, 2.917vw, 56px);

  scrollbar-color: var(--normalGreen) rgba(103, 134, 190, 0.3);
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 6px;
    background: rgba(103, 134, 190, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--normalGreen);
    border-radius: 6px;
  }
`;
