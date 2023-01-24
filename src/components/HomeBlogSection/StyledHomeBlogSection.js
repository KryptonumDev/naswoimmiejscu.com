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
    padding-bottom: 30px;
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
  opacity: ${({ isactive }) => (isactive ? "1" : "0.5")};
  transition: opacity 250ms linear;
  width: 100%;

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--normalGreen);
    outline-offset: 4px;
  }

  @media only screen and (min-width: 992px) {
    &:hover {
      opacity: 0.8;
    }
  }

  @media only screen and (max-width: 992px) {
    align-items: flex-start;
    align-self: flex-start;
    position: relative;
    padding-right: 33px;
    padding-top: ${({ isright }) => (isright ? "0" : "24px")};
    margin-top: ${({ isright }) => (isright ? "32px" : "0")};
    margin-bottom: ${({ isright }) => (isright ? "0" : "30px")};
  }
`;

export const StyledIconWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
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
    display: ${({ notpadding }) => (notpadding ? "none" : "block")};

    @media only screen and (max-width: 992px) {
      display: none;
    }
  }
`;

export const StyledBlogSliderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .slick-slider,
  .slick-slide {
    width: 100%;
  }

  @media only screen and (max-width: 1167px) {
    padding-right: 33px;
  }

  @media only screen and (max-width: 992px) {
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
    padding-right: ${({ isright }) => (isright ? "33px" : "0")};
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
