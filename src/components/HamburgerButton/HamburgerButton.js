import React from "react";
import {
  StyledHamburgerButton,
  StyledHamburgerBox,
  StyledHamburgerInner,
} from "./StyledHamburgerButton";

const HamburgerButton = ({ openMenu }) => {
  return (
    <StyledHamburgerButton aria-label="otwórz menu" onClick={openMenu}>
      <StyledHamburgerBox>
        <StyledHamburgerInner />
      </StyledHamburgerBox>
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;
