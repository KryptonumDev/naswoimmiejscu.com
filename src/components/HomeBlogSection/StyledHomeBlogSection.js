import styled from "styled-components";
import {
  StyledTitleWrapper,
  StyledDescWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";

export const StyledHomeBlogSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 clamp(32px, 6.667vw, 128px) 30px;
  max-width: 1920px;
  margin: clamp(90px, 8.49vw, 163px) auto 0;
  gap: ${({ iscase }) => (iscase ? "clamp(90px, 7.240vw, 139px)" : "0")};
  position: relative;

  @media only screen and (max-width: 1240px) {
    padding: 0 22px 30px;
    margin-top: 0;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 40px;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  > div {
    &:first-child {
      width: 60%;
    }
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;

    > div {
      &:first-child {
        width: 100%;
      }
    }
  }
`;

export const StyledRightWrapper = styled.div`
  margin-top: ${({ iscase }) => (iscase ? "0" : "3.6vw")};
  width: 100%;
  position: relative;
  display: flex;

  > div {
    &:first-child {
      width: 60%;
    }
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 0;

    > div {
      &:first-child {
        width: 100%;
      }
    }
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
  max-width: 891px;
  position: relative;
  z-index: 1;
  margin-bottom: 0;
  text-align: left;

  strong {
    font-weight: 600;
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 44px;
    max-width: unset;
  }
`;

export const StyledContent = styled.div`
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  padding: ${({ hasdeclaredpadding }) =>
    hasdeclaredpadding ? hasdeclaredpadding : "0"};
  width: 100%;

  &.mobile {
    display: none !important;
  }

  @media (max-width: 1024px) {
    &.mobile {
      display: flex !important;
    }

    align-items: flex-start;
    align-self: flex-start;
    position: relative;
    padding-right: 0;
    padding-top: ${({ isright }) => (isright ? "0" : "24px")};
    margin-top: ${({ isright }) => (isright ? "32px" : "0")};
    margin-bottom: ${({ isright }) => (isright ? "0" : "30px")};
  }
`;

export const StyledDesktopScroll = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: ${({ notpadding }) => (notpadding ? "flex-start" : "flex-end")};
  position: relative;
  gap: 86px;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const StyledBlogSliderWrapper = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;

  .slick-slider {
    width: calc(100% + 44px);
  }
  .slick-slide {
    padding: 0 22px;
    width: 100%;
  }

  .slick-track {
    display: flex;
  }

  .slick-list {
    display: flex;
  }

  .slick-slide {
    height: 100%;

    > div {
      display: flex !important;
      height: fit-content;
      flex: 1;
      height: 100%;

      a {
        height: 100%;

        > div {
          height: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    display: flex;
    margin-top: 20px;
    margin: 0px -22px;
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

  @media only screen and (max-width: 355px) {
    min-width: ${({ isright }) => (isright ? "unset" : "504px")};
  }
`;

export const StyledScrollWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${({ notpadding }) =>
    notpadding ? null : "clamp(20px, 2.917vw, 56px)"};
`;

export const StyledMobileBlogText = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    position: relative;
    margin-bottom: ${({ youth }) => (youth ? null : "-20px")};

    svg {
      display: ${({ youth }) => (youth ? "none" : "block")};
      left: 54px;
      top: -10px;
      position: absolute;
    }
  }
`;
