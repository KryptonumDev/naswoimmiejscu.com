import styled from "styled-components";
import Image from "../Image/Image";
import { StyledCircle } from "../Circle/StyledCircle";

export const StyledHomeHeroSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: clamp(100px, 6.563vw, 126px);
  padding-left: 55px;
  gap: clamp(100px, 8.698vw, 200px);

  @media only screen and (max-width: 1167px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 14px;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 82px;
  }
`;

export const StyledLeftWrapper = styled.div`
  position: relative;
  width: 40%;

  @media only screen and (max-width: 992px) {
    width: 100%;
    padding-right: 88px;
  }

  @media only screen and (max-width: 360px) {
    padding-right: 40px;
  }
`;

export const StyledRightWrapper = styled.div`
  max-width: 806px;
  width: 60%;

  @media only screen and (max-width: 992px) {
    max-width: unset;
    width: 100%;
  }
`;

export const StyledTitleWrapper = styled.div`
  font: 700 3.333vw/1.2em Roboto;
  margin-top: clamp(20px, 3.333vw, 64px);

  strong {
    color: var(--nromalBrown);
    font-weight: 700;
  }

  &.contact-page {
    margin-top: 0;
  }

  &.home-contact {
    margin-top: 0;
  }

  &.first-section-womens-youth {
    font-size: 3vw;
  }

  &.second-section-womens-youth,
  &.calendly-first-section {
    margin-top: 0;
  }

  &.effect-womens-title {
    margin-top: 15px;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 64px;
  }

  @media only screen and (max-width: 1763px) {
    &.home-hero-section,
    &.home-second-section,
    &.cooperation-process,
    &.home-about-me,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-proccess,
    &.about-me-meet,
    &.meets-form-womens {
      margin-top: 1.872vw;
      font-size: 2.95vw;
    }

    &.home-contact,
    &.contact-page,
    &.calendly-first-section,
    &.calendly-last-section {
      font-size: 2.95vw;
    }

    &.first-section-womens-youth,
    &.second-section-womens-youth,
    &.effect-womens-title,
    &.home-blog-section-text {
      font-size: 2.95vw;
    }
  }

  @media only screen and (max-width: 1499px) {
    &.home-hero-section,
    &.home-second-section,
    &.cooperation-process,
    &.home-about-me,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-proccess,
    &.about-me-meet,
    &.meets-form-womens {
      margin-top: 0;
      font-size: 2.802vw;
    }

    &.home-contact,
    &.contact-page,
    &.calendly-first-section,
    &.calendly-last-section {
      font-size: 2.802vw;
    }

    &.first-section-womens-youth,
    &.second-section-womens-youth,
    &.effect-womens-title,
    &.home-blog-section-text {
      font-size: 2.802vw;
    }
  }

  @media only screen and (max-width: 1349px) {
    &.home-hero-section,
    &.home-second-section,
    &.cooperation-process,
    &.home-about-me,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-proccess,
    &.about-me-meet,
    &.meets-form-womens,
    &.home-blog-section-text,
    &.calendly-first-section,
    &.calendly-last-section {
      font-size: 3.372vw;
    }

    &.home-contact,
    &.contact-page {
      font-size: 3.372vw;
    }

    &.first-section-womens-youth,
    &.second-section-womens-youth,
    &.effect-womens-title {
      font-size: 3.372vw;
    }
  }

  @media only screen and (max-width: 992px) {
    &.home-hero-section,
    &.home-second-section,
    &.cooperation-process,
    &.home-about-me,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-proccess,
    &.about-me-meet,
    &.meets-form-womens,
    &.home-blog-section-text,
    &.calendly-first-section,
    &.calendly-last-section {
      font-size: 4.234vw;
    }

    &.home-contact,
    &.contact-page {
      font-size: 4.234vw;
    }

    &.first-section-womens-youth,
    &.second-section-womens-youth,
    &.effect-womens-title {
      font-size: 4.234vw;
    }

    &.effect-womens-title {
      margin-top: 30px;
    }
  }

  @media only screen and (max-width: 528px) {
    &.home-hero-section {
      font-size: 5.303vw;
    }

    &.home-second-section,
    &.cooperation-process,
    &.home-about-me,
    &.home-contact,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-proccess,
    &.about-me-meet,
    &.meets-form-womens,
    &.home-blog-section-text,
    &.calendly-first-section,
    &.calendly-last-section {
      font-size: 6.061vw;
    }

    &.about-me-first-section {
      margin-top: 20px;
    }

    &.first-section-womens-youth,
    &.second-section-womens-youth,
    &.effect-womens-title,
    &.contact-page {
      font-size: 6.061vw;
    }
  }

  @media only screen and (max-width: 360px) {
    &.home-hero-section,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-proccess,
    &.about-me-meet,
    &.home-blog-section-text,
    &.contact-page,
    &.calendly-first-section,
    &.calendly-last-section {
      font-size: 7.462vw;
    }

    &.first-section-womens-youth,
    &.second-section-womens-youth,
    &.effect-womens-title,
    &.meets-form-womens {
      font-size: 5.7vw;
    }
  }
`;

export const StyledDescWrapper = styled.div`
  margin: 32px 0 66px;
  font: 300 1.354vw/1.4em Roboto;
  color: var(--normalBlack);

  strong {
    font-weight: 600;
  }

  &.first-section-womens-youth {
    margin-top: 40px;
    margin-bottom: 0;
  }

  &.effect-womens-title {
    margin-bottom: 20px;
  }

  &.home-second-section {
    margin-bottom: 15px;
  }

  @media only screen and (min-width: 1920px) {
    font-size: 26px;
  }

  @media only screen and (max-width: 1763px) {
    &.home-hero-section,
    &.home-second-section,
    &.cooperation-process,
    &.home-about-me,
    &.home-contact,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-proccess,
    &.about-me-meet,
    &.meets-form-womens {
      font-size: 1.248vw;
      margin-bottom: 33px;
    }

    &.first-section-womens-youth,
    &.second-section-womens-youth,
    &.effect-womens-title,
    &.home-blog-section-text,
    &.contact-page,
    &.calendly-first-section,
    &.calendly-last-section {
      font-size: 1.248vw;
    }
  }

  @media only screen and (max-width: 1499px) {
    &.home-hero-section,
    &.home-second-section,
    &.cooperation-process,
    &.home-about-me,
    &.home-contact,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-proccess,
    &.about-me-meet,
    &.second-section-womens-youth,
    &.effect-womens-title,
    &.meets-form-womens,
    &.home-blog-section-text,
    &.contact-page,
    &.calendly-first-section,
    &.calendly-last-section {
      font-size: 1.334vw;
    }

    &.first-section-womens-youth {
      font-size: 1.334vw;
    }
  }

  @media only screen and (max-width: 1349px) {
    &.home-hero-section,
    &.home-second-section,
    &.cooperation-process,
    &.home-about-me,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-proccess,
    &.about-me-meet,
    &.second-section-womens-youth,
    &.effect-womens-title,
    &.meets-form-womens,
    &.home-blog-section-text,
    &.contact-page,
    &.calendly-first-section,
    &.calendly-last-section {
      font-size: 1.734vw;
    }

    &.first-section-womens-youth,
    &.home-contact {
      font-size: 1.734vw;
    }
  }

  @media only screen and (max-width: 992px) {
    &.home-hero-section,
    &.home-second-section,
    &.cooperation-process,
    &.home-about-me,
    &.home-contact,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-proccess,
    &.about-me-meet,
    &.second-section-womens-youth,
    &.effect-womens-title,
    &.meets-form-womens,
    &.home-blog-section-text,
    &.contact-page,
    &.calendly-first-section,
    &.calendly-last-section {
      font-size: 2.218vw;
    }

    &.first-section-womens-youth {
      font-size: 2.218vw;
      margin-top: 14px;
    }

    &.calendly-first-section {
      margin-bottom: 20px;
      margin-top: 20px;
    }
  }

  @media only screen and (max-width: 808px) {
    &.home-hero-section,
    &.home-second-section,
    &.cooperation-process,
    &.home-about-me,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-proccess,
    &.about-me-meet,
    &.meets-form-womens,
    &.first-section-womens-youth,
    &.second-section-womens-youth,
    &.effect-womens-title,
    &.home-blog-section-text,
    &.contact-page,
    &.calendly-first-section,
    &.calendly-last-section {
      font-size: 2.9vw;
    }
  }

  @media only screen and (max-width: 528px) {
    &.home-hero-section,
    &.home-second-section,
    &.cooperation-process,
    &.home-about-me,
    &.home-contact,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-proccess,
    &.about-me-meet,
    &.meets-form-womens {
      margin-top: 14px;
      font-size: 3.409vw;
    }

    &.first-section-womens-youth,
    &.second-section-womens-youth,
    &.effect-womens-title,
    &.home-blog-section-text,
    &.contact-page,
    &.calendly-first-section,
    &.calendly-last-section {
      font-size: 3.409vw;
    }

    &.second-section-womens-youth {
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: 360px) {
    &.home-hero-section,
    &.home-second-section,
    &.cooperation-process,
    &.home-about-me,
    &.home-contact,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-proccess,
    &.about-me-meet,
    &.effect-womens-title,
    &.meets-form-womens,
    &.calendly-first-section,
    &.calendly-last-section {
      font-size: 4.167vw;
    }

    &.first-section-womens-youth,
    &.second-section-womens-youth,
    &.home-blog-section-text,
    &.contact-page {
      font-size: 4.167vw;
    }
  }
`;

export const StyledImage = styled(Image)``;

export const StyledCircleWrapper = styled(StyledCircle)`
  position: absolute;
  top: -50px;
  left: -50px;
  z-index: 1;

  @media only screen and (max-width: 1167px) {
    top: -15px;
    left: -15px;
  }
`;
