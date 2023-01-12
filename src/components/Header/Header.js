import React, { useState, useEffect } from "react";

import HamburgerButton from "../HamburgerButton/HamburgerButton";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Nav from "../Nav/Nav";

import { StyledHeader } from "./StyledHeader";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <Container>
      <StyledHeader>
        <Logo />
        <Nav />
        <Button
          text="SZUKAM CELU"
          variant="green"
          haswidth="254px"
          hasheight="78px"
          hasfontsize="16px"
        />
        <HamburgerButton openMenu={handleOpenMenu} />
      </StyledHeader>
    </Container>
  );
};

export default Header;

// cG9zdDoxOA==
