import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import HamburgerButton from "../HamburgerButton/HamburgerButton";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

import { StyledHeader, StyledNav, StyledWrappedLinks } from "./StyledHeader";
import Container from "../Container/Container";

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
        <StyledNav>
          <Link to="/" activeClassName="activeLink">
            STRONA GŁÓWNA
          </Link>
          <div>
            <Link to="/mlodziez" activeClassName="activeLink">
              MŁODZIEŻ
            </Link>
            /
            <Link to="/kobiety" activeClassName="activeLink">
              KOBIETY
            </Link>
          </div>
          <Link to="/o-mnie" activeClassName="activeLink">
            O MNIE
          </Link>
          <Link to="/blog" activeClassName="activeLink">
            BLOG
          </Link>
          <Link to="/jak-dzialam" activeClassName="activeLink">
            JAK DZIAŁAM
          </Link>
          <Link to="/calendly" activeClassName="activeLink">
            CALENDLY
          </Link>
          <Link to="/kontakt" activeClassName="activeLink">
            KONTAKT
          </Link>
        </StyledNav>
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
