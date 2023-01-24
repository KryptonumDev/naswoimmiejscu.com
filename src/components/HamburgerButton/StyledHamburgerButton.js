import styled from "styled-components";

export const StyledHamburgerButton = styled.button`
  display: none;

  @media only screen and (max-width: 1167px) {
    position: fixed;
    z-index: 11;
    right: 33px;
    top: 24px;
    cursor: pointer;
    border: 0;
    width: 30px;
    height: 30px;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    transition: all 250ms linear;
  }
`;

export const StyledHamburgerBox = styled.span`
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
`;

export const StyledHamburgerInner = styled.span`
  width: 30px;
  height: 2px;
  position: absolute;
  left: 0;
  top: 50%;
  border-radius: 2px;
  background-color: var(--normalBlack);

  &::after {
    content: "";
    right: 0;
    width: 30px;
    height: 2px;
    position: absolute;
    background-color: var(--normalBlack);
    top: 8px;
    border-radius: 3px;
  }

  &::before {
    content: "";
    right: 0;
    width: 30px;
    height: 2px;
    position: absolute;
    background-color: var(--normalBlack);
    top: -8px;
    border-radius: 2px;
  }
`;
