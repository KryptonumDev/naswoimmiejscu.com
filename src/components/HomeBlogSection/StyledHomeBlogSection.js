import styled from "styled-components";
import {
  StyledTitleWrapper,
  StyledDescWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";

export const StyledHomeBlogSection = styled.div`
  width: 100%;
  display: flex;
  padding-left: 128px;
  padding-bottom: 57px;
  max-width: 1920px;
  margin: 0 auto;
  gap: ${({ iscase }) => (iscase ? "clamp(90px, 7.240vw, 139px)" : "0")};
  position: relative;

  &:after {
    content: "";
    display: ${({ iscase }) => (iscase ? "none" : "block")};
    width: 1px;
    height: 124%;
    background-color: var(--hrColor);
    position: absolute;
    left: 53.3%;
    top: 0;
    z-index: 1;

    @media only screen and (max-width: 1440px){
      left: 54.5%;
    }
  }

  @media only screen and (max-width: 1240px) {
    padding-left: 22px;
  }

  @media only screen and (max-width: 1167px) {
    &:after {
      left: 51%;
    }
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    padding-bottom: 30px;

    &:after {
      display: none;
    }
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const StyledRightWrapper = styled.div`
  margin-top: ${({ iscase }) => (iscase ? "0" : "3.6vw")};
  width: 50%;
  position: relative;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    display: none;
  }
`;

export const StyledTitleElement = styled(StyledTitleWrapper)`
  margin-top: 27px;

  @media only screen and (max-width: 1024px) {
    position: relative;
    z-index: 1;
  }
`;

export const StyledDescWrapper2 = styled(StyledDescWrapper)`
  margin-top: 27px;
  text-align: ${({ isleft }) => (isleft ? "left" : "right")};
  max-width: clamp(400px, 32.448vw, 623px);
  position: relative;
  z-index: 1;
  margin-bottom: 0;

  strong {
    font-weight: 600;
  }

  @media only screen and (max-width: 1024px) {
    text-align: left;
    margin-top: 44px;
    max-width: unset;
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
  transition: opacity 250ms linear !important;
  width: 100%;
  opacity: ${({ isactive }) => (isactive ? "1" : "0.5")};

  &.mobile {
    display: none !important;
  }

  > div {
    transition: transform 250ms linear;
  }

  &:hover {
    > div {
      &:first-child {
        transform: ${({ isactive, isright }) => (isactive ? " translateX(0);" : isright ? "translateX(-6px)" : "translateX(6px)")};
      }
    }
  }

  @media (max-width: 1024px) {
    opacity: 1;
    &.desctop {
      display: none !important;
    }
    &.mobile {
      display: flex !important;
    }
  }

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--normalGreen);
    outline-offset: 4px;
  }

  @media only screen and (min-width: 1024px) {
    &:hover {
      opacity: 0.8;
    }
  }

  @media only screen and (max-width: 1024px) {
    align-items: flex-start;
    align-self: flex-start;
    position: relative;
    padding-right: 22px;
    padding-top: ${({ isright }) => (isright ? "0" : "24px")};
    margin-top: ${({ isright }) => (isright ? "32px" : "0")};
    margin-bottom: ${({ isright }) => (isright ? "0" : "30px")};
  }
`;

export const StyledIconWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 90px;
    left: 20px;
  }
`;

export const StyledDesktopScroll = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ notpadding }) => (notpadding ? "flex-start" : "flex-end")};
  position: relative;
  gap: 86px;
`;

export const StyledBlogSliderWrapper = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
  }

  .slick-slider,
  .slick-slide {
    width: 100%;
  }

  .slick-track {
    display: flex;
  }

  .slick-list {
    display: flex;
  }

  .slick-slide{
    height: 100%;

    > div {
      display: flex !important;
      height: 100%;
      flex: 1;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 0 22px 0 0;
    margin: 0 -10px;
  }

  @media only screen and (max-width: 1024px) {
    align-items: flex-start;
    position: relative;

    .slick-dots {
      li {
        margin-right: 18px;

        &:last-child {
          margin-right: 0;
        }

        &.slick-active {
          button {
            background-color: var(--buttonBrownHover);
          }
        }

        button {
          width: 24px;
          height: 24px;
          background-color: var(--paginationNormal);
          border-radius: 50%;

          &::before {
            content: "";
          }
        }
      }
    }
  }

  @media only screen and (max-width: 604px) {
    padding-right: 0;
    min-width: ${({ isright }) => (isright ? "unset" : "604px")};
  }
`;

export const StyledScrollWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: ${({ notpadding }) =>
    notpadding ? null : "clamp(40px, 7.917vw, 152px)"};
  max-height: 800px;
  min-height: 800px;
  overflow-y: scroll;
  gap: ${({ notpadding }) =>
    notpadding ? null : "clamp(20px, 2.917vw, 56px)"};

  scrollbar-color: var(--normalGreen) rgba(103, 134, 190, 0.3);
  scrollbar-width: thin;

  @media (max-width: 1360px) {
    padding-right: ${({ notpadding }) => (notpadding ? null : "40px")};
  }

  ::-webkit-scrollbar {
    width: 8px;
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

export const StyledLeftCaseWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: flex;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const StyledCaseTitle = styled.div`
  font: 700 64px Roboto;
  margin-bottom: 58px;
`;

export const StyledDescCase = styled.div`
  font: 300 26px/1.2em Roboto;
  margin-bottom: 120px;
`;

export const StyledAddnotationFirst = styled.div`
  font: italic 600 26px Roboto;
`;

export const StyledAddnotationSecondDiv = styled.div`
  font: 300 26px Roboto;
  text-align: right;
  margin-top: 10px;
  max-width: 710px;
`;

export const StyledWhiteCircle = styled.div`
  position: absolute;
  top: -20vw;
  right: -20vw;
  z-index: -1;
  width: 46.302vw;
  height: 46.302vw;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 1920px) {
    top: -400px;
    right: -400px;
    width: 889px;
    height: 889px;
  }
`;

export const StyledMobileBlogText = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    position: relative;

    svg {
      display: ${({ youth }) => (youth ? "none" : "block")};
      left: 54px;
      top: -10px;
      position: absolute;
    }
  }
`;
