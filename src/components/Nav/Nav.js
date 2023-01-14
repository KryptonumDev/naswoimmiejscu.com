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
} from "./StyledNav";

const Nav = ({ isOpen, logoDesktop, logoMobile }) => {
  return (
    <StyledNav isopen={isOpen}>
      <StyledLogoWrapper>
        <Logo isHeader logoDesktop={logoDesktop} logoMobile={logoMobile} />
      </StyledLogoWrapper>
      <StyledGreenCircle>
        <SecondGreenCircle />
      </StyledGreenCircle>
      <Link to="/" activeClassName="activeLink">
        <StyledCircleWrapper>
          <StyledCircle hasdeclaredwidth="30px" hasdeclaredheight="30px" />
        </StyledCircleWrapper>
        STRONA GŁÓWNA
      </Link>
      <div className="flex-wrapper">
        <Link to="/mlodziez" activeClassName="activeLink">
          MŁODZIEŻ
        </Link>
        <span>/</span>
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
      <StyledMobileWrapper>
        <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
        <Link to="/regulamin">Regulamin</Link>
      </StyledMobileWrapper>
    </StyledNav>
  );
};

export default Nav;
