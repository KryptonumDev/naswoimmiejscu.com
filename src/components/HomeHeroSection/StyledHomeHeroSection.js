import styled from "styled-components";
import Image from "../Image/Image";
import { StyledCircle } from "../Circle/StyledCircle";

export const StyledHomeHeroSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 126px;
  padding-left: 55px;
  gap: 40px;

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
  font: 700 64px Roboto;
  margin-top: 66px;

  strong {
    color: var(--nromalBrown);
    font-weight: 700;
  }

  &.contact-page {
    margin-top: 0;
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
    &.about-me-meet {
      margin-top: 33px;
      font-size: 52px;
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
    &.about-me-meet {
      margin-top: 0;
      font-size: 42px;
    }
  }

  @media only screen and (max-width: 1349px) {
    &.home-hero-section,
    &.home-second-section,
    &.cooperation-process,
    &.home-about-me,
    &.home-contact,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-proccess,
    &.about-me-meet {
      font-size: 32px;
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
    &.about-me-meet {
      font-size: 42px;
    }
  }

  @media only screen and (max-width: 528px) {
    &.home-hero-section {
      font-size: 28px;
    }

    &.home-second-section,
    &.cooperation-process,
    &.home-about-me,
    &.home-contact,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-proccess,
    &.about-me-meet {
      font-size: 32px;
    }
  }

  @media only screen and (max-width: 360px) {
    &.home-hero-section,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-proccess,
    &.about-me-meet {
      font-size: 22px;
    }
  }
`;

export const StyledDescWrapper = styled.div`
  margin: 32px 0 66px;
  font: 300 26px Roboto;
  color: var(--normalBlack);

  strong {
    font-weight: 600;
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
    &.about-me-meet {
      font-size: 22px;
      margin-bottom: 33px;
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
    &.about-me-meet {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 1349px) {
    &.home-hero-section,
    &.home-second-section,
    &.cooperation-process,
    &.home-about-me,
    &.home-contact,
    &.about-me-first-section,
    &.who-im-about-me,
    &.about-me-proccess,
    &.about-me-meet {
      font-size: 18px;
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
    &.about-me-meet {
      font-size: 22px;
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
    &.about-me-meet {
      margin-top: 14px;
      font-size: 18px;
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
    &.about-me-meet {
      font-size: 15px;
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
