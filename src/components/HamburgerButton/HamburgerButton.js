import React from "react";
import {
  StyledHamburgerButton,
  StyledHamburgerBox,
  StyledHamburgerInner,
} from "./StyledHamburgerButton";

const HamburgerButton = ({ openMenu, isOpen }) => {
  return (
    <StyledHamburgerButton
      aria-label="otwórz menu"
      onClick={openMenu}
      isopen={isOpen}
    >
      <StyledHamburgerBox isopen={isOpen}>
        <StyledHamburgerInner isopen={isOpen}/>
      </StyledHamburgerBox>
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;
