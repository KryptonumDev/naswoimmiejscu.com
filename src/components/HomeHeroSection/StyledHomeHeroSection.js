import styled from "styled-components";
import Image from "../Image/Image";
import { StyledCircle } from "../Circle/StyledCircle";

export const StyledHomeHeroSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: clamp(100px, 6.198vw, 119px);
  align-items: center;
  padding-left: 55px;
  gap: clamp(100px, 8.698vw, 167px);

  @media only screen and (max-width: 1167px) {
    padding-left: 0;
    margin-top: 38px;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 14px;
  }
`;

export const StyledLeftWrapper = styled.div`
  position: relative;
  width: 40%;

  .gatsby-image-wrapper {
    width: 100%;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
  }

  @media only screen and (max-width: 360px) {
    height: 225px;

    .gatsby-image-wrapper {
      height: 100%;
    }
  }
`;

export const StyledRightWrapper = styled.div`
  max-width: 806px;
  width: 60%;
  position: relative;
  z-index: 1;

  @media only screen and (max-width: 992px) {
    max-width: unset;
    width: 100%;
  }
`;

export const StyledTitleWrapper = styled.div`
  font: 700 3.333vw/1.2em Roboto;

  strong {
    color: var(--nromalBrown);
    font-weight: 700;
  }

  &.first-section-womens-youth {
    font-size: 3vw;
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
      margin-top: 21px;
    }

    &.about-me-first-section,
    &.contact-page {
      margin-top: 0;
    }

    &.calendly-last-section {
      margin-bottom: 10px;
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

    &.first-section-womens-youth,
    &.second-section-womens-youth,
    &.effect-womens-title,
    &.contact-page {
      font-size: 6.061vw;
    }
  }

  @media only screen and (max-width: 360px) {
    &.home-hero-section,
    &.who-im-about-me,
    &.home-blog-section-text,
    &.contact-page,
    &.calendly-first-section,
    &.home-second-section,
    &.cooperation-process,
    &.home-about-me,
    &.home-contact {
      font-size: 8.889vw;
    }

    &.home-hero-section,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-meet,
    &.contact-page,
    &.calendly-last-section {
      font-size: 6.111vw;
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
  margin: 24px 0 73px;
  font: 300 1.354vw/1.2em Roboto;
  color: var(--normalBlack);

  strong {
    font-weight: 600;
  }

  &.calendly-last-section {
    margin-top: 0;
    margin-bottom: clamp(30px, 2.344vw, 45px);
  }

  &.home-about-me {
    margin-bottom: 44px;
  }

  &.first-section-womens-youth {
    margin-top: 40px;
    margin-bottom: 0;
  }

  &.effect-womens-title {
    margin-bottom: 20px;
    max-width: 752px;
  }

  &.home-second-section {
    margin-bottom: 15px;
  }

  &.home-hero-section {
    max-width: 723px;
  }

  &.second-section-womens-youth {
    margin-top: clamp(30px, 3.646vw, 70px);
    margin-bottom: 39px;
  }

  &.first-section-womens-youth {
    margin-top: clamp(20px, 3.385vw, 65px);
  }

  &.contact-page {
    margin-top: clamp(30px, 3.646vw, 70px);
    margin-bottom: clamp(20px, 2.083vw, 40px);
  }

  &.cooperation-process,
  &.about-me-first-section {
    margin-bottom: 0;
  }

  &.calendly-first-section {
    margin: clamp(20px, 3.385vw, 65px) 0;
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

    &.home-hero-section {
      max-width: unset;
    }

    &.first-section-womens-youth {
      font-size: 2.218vw;
      margin-top: 14px;
    }

    &.calendly-first-section {
      margin-bottom: 20px;
      margin-top: 20px;
    }

    &.second-section-womens-youth {
      margin-top: 13px;
      margin-bottom: 27px;
    }

    &.contact-page {
      margin-top: 10px;
      margin-bottom: 67px;
    }

    &.effect-womens-title {
      margin: 16px 0 35px;
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
    &.home-hero-section {
      left: -16px;
      top: -16px;
    }
  }

  @media only screen and (max-width: 992px) {
    top: -20px;
    left: auto;
    right: -20px;
    width: 64px;
    height: 64px;

    div {
      width: 64px;
      height: 64px;
    }
  }
`;

export const StyledBottomCircle = styled.div`
  display: none;
  position: absolute;
  right: -50px;
  bottom: -80px;

  @media only screen and (max-width: 992px) {
    display: block;
  }
`;
