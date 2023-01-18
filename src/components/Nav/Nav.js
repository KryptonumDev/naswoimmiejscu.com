import React from "react";
import { Link } from "gatsby";

import Logo from "../Logo/Logo";
import SecondGreenCircle from "../SecondGreenCircle/SecondGreenCircle";

import { StyledCircle } from "../Circle/StyledCircle";
import {
  StyledNav,
  StyledLogoWrapper,
  StyledMobileWrapper,
  StyledCircleWrapper,
  StyledGreenCircle,
  StyledFooterNav,
} from "./StyledNav";

const Nav = ({ isOpen, isFooter, logoDesktop, logoMobile, openMenu }) => {
  return !isFooter ? (
    <StyledNav isopen={isOpen}>
      <StyledLogoWrapper>
        <Logo
          isHeader="true"
          logoDesktop={logoDesktop}
          logoMobile={logoMobile}
        />
      </StyledLogoWrapper>
      <StyledGreenCircle>
        <SecondGreenCircle />
      </StyledGreenCircle>
      <Link to="/" activeClassName="activeLink" onClick={openMenu}>
        <StyledCircleWrapper>
          <StyledCircle hasdeclaredwidth="30px" hasdeclaredheight="30px" />
        </StyledCircleWrapper>
        STRONA GŁÓWNA
      </Link>
      <div className="flex-wrapper">
        <Link to="/mlodziez" activeClassName="activeLink" onClick={openMenu}>
          MŁODZIEŻ
        </Link>
        <span>/</span>
        <Link to="/kobiety" activeClassName="activeLink" onClick={openMenu}>
          KOBIETY
        </Link>
      </div>
      <Link to="/o-mnie" activeClassName="activeLink" onClick={openMenu}>
        O MNIE
      </Link>
      <Link to="/blog" activeClassName="activeLink" onClick={openMenu}>
        BLOG
      </Link>
      <Link to="/calendly" activeClassName="activeLink" onClick={openMenu}>
        CALENDLY
      </Link>
      <Link to="/kontakt" activeClassName="activeLink" onClick={openMenu}>
        KONTAKT
      </Link>
      <StyledMobileWrapper>
        <Link to="/polityka-prywatnosci" onClick={openMenu}>
          Polityka prywatności
        </Link>
        <Link to="/regulamin" onClick={openMenu}>
          Regulamin
        </Link>
      </StyledMobileWrapper>
    </StyledNav>
  ) : (
    <StyledFooterNav>
      <Link to="/" activeClassName="activeLink" onClick={openMenu}>
        STRONA GŁÓWNA
      </Link>
      <div className="flex-wrapper">
        <Link to="/mlodziez" activeClassName="activeLink" onClick={openMenu}>
          MŁODZIEŻ
        </Link>
        <span>/</span>
        <Link to="/kobiety" activeClassName="activeLink" onClick={openMenu}>
          KOBIETY
        </Link>
      </div>
      <Link to="/o-mnie" activeClassName="activeLink" onClick={openMenu}>
        O MNIE
      </Link>
      <Link to="/blog" activeClassName="activeLink" onClick={openMenu}>
        BLOG
      </Link>
      <Link to="/calendly" activeClassName="activeLink" onClick={openMenu}>
        CALENDLY
      </Link>
      <Link to="/kontakt" activeClassName="activeLink" onClick={openMenu}>
        KONTAKT
      </Link>
    </StyledFooterNav>
  );
};

export default Nav;
