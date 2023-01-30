import styled from "styled-components";

export const StyledHamburgerButton = styled.button`
  display: none;

  &:focus-visible{
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--normalGreen);
    outline-offset: 4px;
  }

  @media only screen and (max-width: 1167px) {
    position: absolute;
    z-index: 11;
    right: 22px;
    top: 21px;
    cursor: pointer;
    border: 0;
    width: 36px;
    height: 34px;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
  }
`;

export const StyledHamburgerBox = styled.span`
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
`;

export const StyledHamburgerInner = styled.span`
  width: 36px;
  height: 3px;
  position: absolute;
  left: 0;
  top: 50%;
  border-radius: 2px;
  transition: background-color 250ms linear;
  background-color: ${({ isopen }) => isopen ? "transparent" : "var(--normalBlack)"};

  &::after {
    content: "";
    right: 0;
    width: 36px;
    height: 3px;
    position: absolute;
    background-color: var(--normalBlack);
    top: 8px;
    border-radius: 3px;
    transform: ${({ isopen }) => isopen ? "rotate(-45deg) translate(7px, -6px)" : "rotate(0)"};
    transition: transform 250ms linear;
  }

  &::before {
    content: "";
    right: 0;
    width: 36px;
    height: 3px;
    position: absolute;
    background-color: var(--normalBlack);
    top: -8px;
    border-radius: 2px;
    transform: ${({ isopen }) => isopen ? "rotate(45deg) translate(5px, 4px)" : "rotate(0)"};
    transition: transform 250ms linear;
  }
`;
