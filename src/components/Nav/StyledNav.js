import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 21px;

  a,
  span {
    font: 400 14px Roboto;
    text-transform: uppercase;
    color: var(--normalGrey);
    text-decoration: none;
    position: relative;
    transition: color .4s ease-out, font-weight .4s ease-out;

    &.activeLink {
      color: var(--normalBlack);
      font-weight: 700;
    }

    &:hover{
      color: var(--normalBlack) !important;
      font-weight: 700;
    }

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: var(--hoverGreen);
      outline-offset: 4px;
    }
  }

  .flex-wrapper {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 1608px) {
    gap: 13px;

    a,
    span {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 1350px) {
    gap: 9px;

    a,
    span {
      font-size: 10px;
    }
  }

  @media only screen and (max-width: 1167px) {
    display: ${({ isopen }) => (isopen ? "flex" : "none")};
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 600px;
    background-color: var(--normalBlur);
    gap: 30px;

    a,
    span {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 600px) {
    gap: 14px;

    a,
    span {
      font-size: 20px;
    }
  }
`;

export const StyledLogoWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 1167px) {
    position: absolute;
    top: 29px;
    left: 24px;
    display: block;
  }
`;

export const StyledMobileWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 1167px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 14px;
    margin-top: 27px;

    a {
      text-transform: normal;
      font: 600 14px Roboto;
      color: var(--normalBlack);

      &:focus-visible {
        outline-width: 1px;
        outline-style: solid;
        outline-color: var(--hoverGreen);
        outline-offset: 4px;
      }
    }
  }
`;

export const StyledCircleWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 1167px) {
    position: absolute;
    top: -3px;
    left: -100px;
    display: block;
  }
`;

export const StyledGreenCircle = styled.div`
  display: none;

  @media only screen and (max-width: 1167px) {
    position: absolute;
    top: 150px;
    right: -240px;
    display: block;
  }
`;

export const StyledFooterNav = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
  width: 100%;

  a,
  span {
    font: 400 14px Roboto;
    text-transform: uppercase;
    color: var(--normalGrey);
    text-decoration: none;
    position: relative;

    &.activeLink {
      color: var(--normalBlack);
      font-weight: 700;
    }

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: var(--hoverGreen);
      outline-offset: 4px;
    }
  }

  .flex-wrapper {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 1608px) {
    gap: 13px;

    a,
    span {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 1350px) {
    gap: 9px;

    a,
    span {
      font-size: 10px;
    }
  }

  @media only screen and (max-width: 992px){
    flex-direction: column;
    gap: 14px;
    align-items: flex-start;
    
    a,
    span {
      font-size: 20px;
    }
  }
`;
