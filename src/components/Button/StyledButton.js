import styled from "styled-components";
import { Link } from "gatsby";

export const StyledLink = styled(Link)`
  background-color: ${({ variant }) =>
    variant === "green" ? "var(--normalGreen)" : "transparent"};
  border: ${({ variant }) =>
    variant === "green" ? "none" : "1px solid var(--normalBlack)"};
  width: ${({ hasdeclaredwidth }) =>
    hasdeclaredwidth ? hasdeclaredwidth : "355px"};
  border-radius: 64px;
  min-height: ${({ hasdeclaredheight }) =>
    hasdeclaredheight ? hasdeclaredheight : "88px"};
  transition: background-color 250ms;
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

  @media only screen and (max-width: 1499px) {
    &.home-hero-section,
    &.home-second-section,
    &.under-cooperation-process,
    &.home-about-me,
    &.footer,
    &.abotu-me-who-im,
    &.about-me-meet-btn,
    &.btn-faq-section {
      width: 277px;
      min-height: 73px;
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 992px) {
    &.under-cooperation-process {
      display: none;
    }
  }

  @media only screen and (max-width: 660px) {
    &.about-me-proccess-btn {
      width: 100%;
      font-size: 11px;
      min-height: 53px;
    }
  }

  @media only screen and (max-width: 350px) {
    &.home-hero-section,
    &.home-second-section,
    &.home-about-me,
    &.footer,
    &.abotu-me-who-im,
    &.about-me-meet-btn,
    &.btn-faq-section {
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
