import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-bottom: 42px;
  display: flex;
  justify-content: space-between;
  margin-top: 56px;

  @media only screen and (max-width: 992px) {
    flex-direction: column-reverse;
    gap: ${({ smallgap }) => (smallgap ? "0" : "83px")};
    padding-right: 33px;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledRightWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledRightWrapperContent = styled.div`
  display: flex;
  gap: clamp(20px, 1.510vw, 29px);
  align-items: center;
  align-self: flex-end;

  @media (max-width: 992px) {
    &.desctop{
      display: none;
    }
  }

  p {
    font: 700 clamp(16px, 1.250vw, 24px) Roboto;
    color: var(--normalBlack);
  }

  @media only screen and (max-width: 992px) {
    align-self: center;
    flex-direction: column;
    align-items: center;
    width: 100%;

    p {
      font-size: 24px;
    }
  }
`;

export const StyledCopyright = styled.div`
  margin-top: 62px;

  @media only screen and (max-width: 992px) {
    margin-top: 26px;
  }
`;

export const StyledTopText = styled.div`
  font: 700 20px Roboto;

  @media only screen and (max-width: 992px) {
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

    &:hover {
      color: var(--normalGreen);
    }
  }

  @media only screen and (max-width: 992px) {
    font-size: 11px;
  }
`;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  bottom: 10%;
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
  margin-top: 36px;
  align-self: flex-end;
  padding-right: 70px;

  a {
    font: 600 14px Roboto;
    color: var(--normalBlack);
    text-decoration: none;
    transition: color 350ms linear;

    &:hover {
      color: var(--normalGreen);
    }

    &.activeLink {
      color: var(--normalBlack);
      font-weight: 700;
    }
  }

  @media only screen and (max-width: 992px) {
    display: ${({ hideMobile }) => (hideMobile ? "none" : "flex")};
    padding-right: 0;
    margin-top: 26px;
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
    display: none;
  }
`;
