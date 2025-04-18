import styled from "styled-components";

export const StyledLink = styled.div`
  background-color: ${({ variant }) =>
    variant === "green" ? "var(--normalGreen)" : "transparent"};
  border: ${({ variant }) =>
    variant === "green"
      ? "1px solid transparent"
      : "1px solid var(--normalBlack)"};
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
    hasdeclaredheight ? hasdeclaredheight : "81px"}
  );
  transition: background-color 400ms, color 400ms, border 400ms;
  cursor: pointer;
  text-transform: uppercase;
  font: 700 ${({ hasfontsize }) => (hasfontsize ? hasfontsize : "20px")} Roboto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--normalBlack);
  text-align: center;

  &.blog-slider-btn--show {
    display: none;
  }

  &:hover {
    background-color: ${({ variant }) =>
    variant === "green" ? "var(--hoverGreen)" : "var(--buttonBrownHover)"};
    color: ${({ variant }) =>
    variant === "green" ? null : "var(--normalWhite)"};
    border: 1px solid transparent;
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

    @media only screen and (max-width: 1440px) {
      width: 172px;
      min-height: 67px;
    }

    @media only screen and (max-width: 1249px) {
      display: none;
    }
  }

  &.blog-slider-btn {
    margin-top: 48px;
  }

  &.blog-recomendation-slider {
    margin-top: 48px;
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
    &.about-me-meet-btn,
    &.btn-faq-section {
      width: 277px;
      min-height: 73px;
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 1024px) {
    &.under-cooperation-process {
      display: none;
    }

    &.btn-faq-section {
      margin-top: 32px;
    }

    &.calenldy-last-section {
      width: 302px;
      font-size: 16px;
      height: 73px;
    }

    &.blog-slider-btn {
      display: none;
    }

    &.blog-slider-btn--show {
      display: flex;
    }

    &.blog-recomendation-slider {
      display: none;
    }
  }

  @media only screen and (max-width: 660px) {
    &.about-me-proccess-btn {
      width: 100%;
      font-size: 13px;
      min-height: 53px;
    }

    &.abotu-me-who-im,
    &.about-me-meet-btn,
    &.btn-faq-section,
    &.blog-recomendation-slider {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 583px) {
    &.second-section-womens-youth,
    &.calenldy-first-section {
      width: 100%;
      min-height: 53px;
      font-size: 13px;
    }

    &.calenldy-last-section {
      width: 100%;
      min-height: 73px;
      font-size: 16px;
    }

    &.btn-faq-section {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: 414px) {
    &.contact-page-btn,
    &.calenldy-first-section,
    &.footer,
    &.calenldy-last-section,
    &.home-hero-section,
    &.home-second-section,
    &.home-about-me,
    &.blog-recomendation-slider,
    &.blog-slider-btn &.btn-faq-section &.btn-faq-section {
      width: 100%;
    }
  }

  @media only screen and (max-width: 360px) {
    &.contact-page-btn,
    &.calenldy-first-section {
      width: 100%;
      font-size: 13px;
      min-height: 53px;
    }

    &.footer {
      width: 100%;
      min-height: 73px;
    }

    &.calenldy-last-section {
      font-size: 16px;
    }

    &.home-hero-section,
    &.home-second-section,
    &.home-about-me,
    &.blog-recomendation-slider,
    &.blog-slider-btn &.btn-faq-section {
      min-height: 73px;
    }

    &.btn-faq-section {
      min-height: 73px;
    }
  }

  @media only screen and (max-width: 340px) {
    &.home-hero-section,
    &.home-second-section,
    &.home-about-me,
    &.abotu-me-who-im,
    &.about-me-meet-btn,
    &.btn-faq-section,
    &.calenldy-last-section {
      width: 100%;
    }

    &.blog-slider-btn {
      width: 100%
    }

    &.calenldy-last-section {
      font-size: 13px;
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
    hasdeclaredheight ? hasdeclaredheight : "81px"};
  transition: background-color 350ms;
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
