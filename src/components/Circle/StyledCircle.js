import styled from "styled-components";

export const StyledCircle = styled.div`
  width: ${({ hasdeclaredwidth }) =>
    hasdeclaredwidth ? hasdeclaredwidth : "99px"};
  height: ${({ hasdeclaredheight }) =>
    hasdeclaredheight ? hasdeclaredheight : "99px"};
  border-radius: 50%;
  background-color: ${({ hasdeclaredbg }) =>
    hasdeclaredbg ? hasdeclaredbg : "var(--buttonBrownHover)"};

  &.blog-mobile-section-show {
    display: none;
  }

  &.avatar-circle {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media only screen and (max-width: 1225px) {
    &.home-about-me {
      width: 42px;
      height: 42px;
    }
  }

  @media only screen and (max-width: 1167px) {
    &.home-hero-section {
      width: 30px;
      height: 31px;
      background-color: var(--normalGreen);
    }
  }

  @media only screen and (max-width: 992px) {
    &.about-me-second-circle {
      opacity: 0.6;
    }

    &.blog-mobile-section-hide {
      display: none;
    }

    &.blog-mobile-section-show {
      position: absolute;
      top: 50%;
      right: -70px;
      transform: translateY(-50%);
      z-index: -1;
      display: block;
    }
  }
`;
