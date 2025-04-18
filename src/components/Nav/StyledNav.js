/** @format */

import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 21px;

  @media only screen and (min-width: 1920px) {
    gap: 26px;
  }

  a,
  span {
    font: 400 15px/1.33em Roboto;
    text-transform: uppercase;
    color: var(--normalGrey);
    text-decoration: none;
    position: relative;
    transition: color 0.4s ease-out, font-weight 0.4s ease-out;

    @media only screen and (min-width: 1920px) {
      font-size: 16px;
      white-space: 1.33em;
    }

    &.activeLink {
      color: var(--normalBlack);
      font-weight: 700;
    }

    &:hover {
      color: var(--normalBlack) !important;
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
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 1350px) {
    gap: 7px;

    a,
    span {
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 1249px) {
    display: flex;
    opacity: ${({ isopen }) => (isopen ? "1" : "0")};
    pointer-events: ${({ isopen }) => (isopen ? "all" : "none")};
    transition: opacity 250ms linear;
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

export const StyledMobileWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 1249px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 14px;
    margin-top: 27px;

    a {
      text-transform: normal;
      font: 400 14px Roboto;
      color:var(--normalGrey);

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

  @media only screen and (max-width: 1249px) {
    position: absolute;
    top: -3px;
    left: -100px;
    display: block;
  }
`;

export const StyledGreenCircle = styled.div`
  display: none;

  @media only screen and (max-width: 1249px) {
    position: absolute;
    top: 150px;
    right: -240px;
    display: block;
  }
`;

export const StyledFooterNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 21px;

  a,
  span {
    font: 400 14px Roboto;
    text-transform: uppercase;
    color: var(--normalGrey);
    text-decoration: none;
    position: relative;
    transition: color 0.4s ease-out, font-weight 0.4s ease-out;

    &.activeLink {
      color: var(--normalBlack);
      font-weight: 700;
    }

    &:hover {
      color: var(--normalBlack) !important;
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
  }

  @media only screen and (max-width: 1350px) {
    gap: 9px;
  }

  @media only screen and (max-width: 1296px) {
    a,
    span {
      font-size: 10px;
    }
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 14px;
    align-items: flex-start;
    width: 100%;

    a,
    span {
      font-size: 24px;
    }
  }
`;
