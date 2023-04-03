/** @format */

import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-top: 56px;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: ${({ smallgap }) => (smallgap ? "0" : "83px")};
    padding-right: 22px;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 54px 0 clamp(32px, 6.667vw, 128px);

  p {
    font: 700 clamp(16px, 1.25vw, 24px) / 1.33em Roboto;
    color: var(--normalBlack);
  }

  @media only screen and (max-width: 1167px) {
    padding: 0 22px;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column-reverse;
    align-items: flex-start;

    a {
      width: 100%;
      display: flex;
      justify-content: center;

      &:first-child {
        display: none;
      }
    }

    p {
      text-align: center;
      font-size: 24px;
    }
  }
`;

export const StyledCopyright = styled.div`
  width: 25%;
  min-width: 330px;

  @media only screen and (max-width: 992px) {
    min-width: unset;
    width: 100%;
    padding-bottom: 56px;
  }
`;

export const StyledTopText = styled.div`
  font: 700 20px Roboto;
  display: flex;
  gap: 6px;

  @media only screen and (max-width: 992px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const StyledBottomText = styled.div`
  margin-top: 11px;
  font: 300 13px Roboto;

  a {
    font-weight: bold;
    text-decoration: none;
    color: var(--normalBlack);
    transition: color 350ms linear;

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: var(--normalGreen);
      outline-offset: -1px;
    }

    &:hover {
      color: var(--normalGreen);
    }
  }

  @media only screen and (max-width: 992px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 11px;
  }
`;

export const StyledRightWrapperContent = styled.div`
  display: flex;
  align-items: center;
  gap: 29px;

  @media (max-width: 992px) {
    &.desctop {
      display: none;
    }
  }

  p {
    font: 700 clamp(16px, 1.25vw, 24px) / 1.33em Roboto;
    color: var(--normalBlack);
  }

  @media only screen and (max-width: 992px) {
    align-self: center;
    flex-direction: column;
    align-items: center;
    width: 100%;

    a {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    p {
      text-align: center;
      font-size: 24px;
    }
  }
`;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 982px;
  height: 982px;
  transform: translate(-50%, 91%);
  z-index: -1;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const StyledFooterLinks = styled.div`
  display: ${({ hideMobile }) => (hideMobile ? "flex" : "none")};
  gap: 28px;
  padding-right: 20px;
  width: 10%;
  min-width: 170px;

  a {
    font: 300 14px Roboto;
    color: var(--normalBlack);
    text-decoration: none;
    transition: color 350ms linear;

    &:hover {
      color: var(--normalGreen);
    }

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: var(--normalGreen);
      outline-offset: -1px;
    }

    &.activeLink {
      color: var(--normalBlack);
      font-weight: 700;
    }
  }

  @media only screen and (max-width: 1296px) {
    min-width: 120px;
    a {
      font-size: 10px;
    }
  }

  @media only screen and (max-width: 992px) {
    display: ${({ hideMobile }) => (hideMobile ? "none" : "flex")};
    padding-right: 0;
    margin-top: 26px;
    margin-bottom: 26px;
    width: 100%;
    min-width: unset;

    a {
      font-size: 22px;
    }
  }

  @media only screen and (max-width: 480px) {
    a {
      font-size: 14px;
    }
  }
`;

export const StyledSmallGreenCircle = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    width: 328px;
    height: 328px;
    position: absolute;
    right: -200px;
    top: 280px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 451px) {
    right: -250px;
    top: 240px;
  }
`;

export const StyledMobileGreenCircle = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    position: absolute;
    bottom: -10vw;
    transform: translateY(-50%);
    right: -230px;
    width: 328px;
    height: 328px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 518px) {
    bottom: ${({ difftop }) => (difftop ? "-15vw" : null)};
  }

  @media only screen and (max-width: 346px) {
    right: -260px;
  }
`;

export const StyledBottomWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f2e1;
  padding: 16px clamp(32px, 6.667vw, 128px);
  margin-top: 48px;

  @media only screen and (max-width: 1167px) {
    padding: 16px 22px;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column-reverse;
    background-color: transparent;
  }
`;

export const StyledMobileLogo = styled.div`
  width: 100%;
  display: none;
  justify-content: flex-start;
  padding-bottom: 30px;

  @media only screen and (max-width: 992px) {
    display: flex;
  }

  @media only screen and (max-width: 600px) {
    padding-bottom: 0;
  }

  @media only screen and (max-width: 360px) {
    a {
      max-width: 246px;
      width: 100%;
    }
  }
`;
