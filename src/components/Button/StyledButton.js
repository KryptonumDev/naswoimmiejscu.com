import styled from "styled-components";
import { Link } from "gatsby";

export const StyledLink = styled(Link)`
  background-color: ${({ variant }) =>
    variant === "green" ? "var(--normalGreen)" : "transparent"};
  border: ${({ variant }) =>
    variant === "green" ? "none" : "1px solid var(--normalBlack)"};
  width: clamp(
    ${({ hasbasicwidth }) => (hasbasicwidth ? hasbasicwidth : "277px")},
    ${({ hasclampwidth }) => (hasclampwidth ? hasclampwidth : "18.490vw")},
    ${({ hasdeclaredwidth }) => (hasdeclaredwidth ? hasdeclaredwidth : "355px")}
  );
  border-radius: 64px;
  min-height: clamp(
    73px,
    ${({ hasclampheight }) => (hasclampheight ? hasclampheight : "4.583vw")},
    ${({ hasdeclaredheight }) =>
      hasdeclaredheight ? hasdeclaredheight : "88px"}
  );
  transition: background-color 250ms, color 250ms, border 250ms;
  cursor: pointer;
  text-transform: uppercase;
  font: 700 ${({ hasfontsize }) => (hasfontsize ? hasfontsize : "20px")} Roboto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--normalBlack);
  text-align: center;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "green" ? "var(--hoverGreen)" : "var(--buttonBrownHover)"};
    color: ${({ variant }) =>
      variant === "green" ? null : "var(--normalWhite)"};
    border: none;
  }

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: ${({ variant }) =>
      variant === "green" ? "var(--hoverGreen)" : "var(--buttonBrownHover)"};
    outline-offset: 4px;
  }

  &.header-btn {
    @media only screen and (max-width: 1608px) {
      width: 200px;
      min-height: 60px;
    }

    @media only screen and (max-width: 1167px) {
      display: none;
    }
  }

  &.blog-slider-btn {
    margin-right: clamp(40px, 8.917vw, 182px);

    @media only screen and (max-width: 992px) {
      margin-right: 0;
    }
  }

  &.blog-recomendation-slider {
    margin-left: clamp(120px, 10.521vw, 202px);
  }

  @media only screen and (max-width: 1499px) {
    &.home-hero-section,
    &.home-second-section,
    &.under-cooperation-process,
    &.home-about-me,
    &.blog-recomendation-slider,
    &.blog-slider-btn,
    &.footer,
    &.abotu-me-who-im,
    &.about-me-meet-btn {
      width: 277px;
      min-height: 73px;
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 992px) {
    &.under-cooperation-process {
      display: none;
    }

    &.blog-recomendation-slider {
      display: none;
    }

    &.blog-slider-btn {
      margin-top: 66px;
    }
  }

  @media only screen and (max-width: 660px) {
    &.about-me-proccess-btn {
      width: 100%;
      font-size: 11px;
      min-height: 53px;
    }
  }

  @media only screen and (max-width: 583px) {
    &.second-section-womens-youth {
      width: 100%;
      min-height: 53px;
      font-size: 11px;
    }
  }

  @media only screen and (max-width: 360px) {
    &.footer,
    &.abotu-me-who-im,
    &.about-me-meet-btn,
    &.btn-faq-section,
    &.contact-page-btn,
    &.calenldy-first-section {
      width: 100%;
      font-size: 11px;
      min-height: 53px;
    }

    &.home-hero-section,
    &.home-second-section,
    &.home-about-me,
    &.blog-recomendation-slider,
    &.blog-slider-btn {
      min-height: 73px;
    }

    &.btn-faq-section {
      min-height: 73px;
    }
  }

  @media only screen and (max-width: 340px) {
    &.home-hero-section,
    &.home-second-section,
    &.home-about-me {
      width: 100%;
    }
  }
`;

export const StyledButton = styled.button`
  background-color: ${({ variant }) =>
    variant === "green" ? "var(--normalGreen)" : "var(--normalWhite)"};
  color: var(--normalBlack);
  border: none;
  width: ${({ hasdeclaredwidth }) =>
    hasdeclaredwidth ? hasdeclaredwidth : "355px"};
  border-radius: 64px;
  min-height: ${({ hasdeclaredheight }) =>
    hasdeclaredheight ? hasdeclaredheight : "88px"};
  transition: background-color 250ms;
  cursor: pointer;
  text-transform: uppercase;
  text-align: center;
  font: 700 ${({ hasfontsize }) => (hasfontsize ? hasfontsize : "20px")} Roboto;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "green" ? "var(--hoverGreen)" : "var(--buttonBrownHover)"};
  }

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: ${({ variant }) =>
      variant === "green" ? "var(--hoverGreen)" : "var(--buttonBrownHover)"};
    outline-offset: 4px;
  }

  &:disabled {
    background-color: ${({ variant }) =>
      variant === "green"
        ? "var(--disabledGreen)"
        : "var(--buttonWhiteNormal)"};
    color: ${({ variant }) =>
      variant === "green" ? "var(--normalWhite)" : "var(--disabledGreen)"};
    border: ${({ variant }) =>
      variant === "green"
        ? "1px solid var(--normalWhite)"
        : "1px solid var(--disabledGreen)"};
  }

  @media only screen and (max-width: 1499px) {
    &.btn-faq-section {
      width: 277px;
      min-height: 73px;
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 350px) {
    &.btn-faq-section {
      width: 100%;
    }
  }
`;
