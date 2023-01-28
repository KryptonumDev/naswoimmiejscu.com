import React from "react";
import { Link } from "gatsby";

import Logo from "../Logo/Logo";
import SecondGreenCircle from "../SecondGreenCircle/SecondGreenCircle";

import { StyledCircle } from "../Circle/StyledCircle";
import {
  StyledNav,
  StyledMobileWrapper,
  StyledCircleWrapper,
  StyledGreenCircle,
  StyledFooterNav,
} from "./StyledNav";

const Nav = ({ isOpen, isFooter, openMenu }) => {
  return !isFooter ? (
    <StyledNav isopen={isOpen}>
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
        <Link to="/mlodziez/" activeClassName="activeLink" onClick={openMenu}>
          MŁODZIEŻ
        </Link>
        <span>/</span>
        <Link to="/kobiety/" activeClassName="activeLink" onClick={openMenu}>
          KOBIETY
        </Link>
      </div>
      <Link to="/o-mnie/" activeClassName="activeLink" onClick={openMenu}>
        O MNIE
      </Link>
      <Link partiallyActive={true} to="/blog/" activeClassName="activeLink" onClick={openMenu}>
        BLOG
      </Link>
      <Link to="/calendly/" activeClassName="activeLink" onClick={openMenu}>
        CALENDLY
      </Link>
      <Link to="/opinie/" activeClassName="activeLink" onClick={openMenu}>
        OPINIE
      </Link>
      <StyledMobileWrapper>
        <Link to="/polityka-prywatnosci/" onClick={openMenu}>
          Polityka prywatności
        </Link>
      </StyledMobileWrapper>
    </StyledNav>
  ) : (
    <StyledFooterNav>
      <Link to="/" activeClassName="activeLink" onClick={openMenu}>
        STRONA GŁÓWNA
      </Link>
      <div className="flex-wrapper">
        <Link to="/mlodziez/" activeClassName="activeLink" onClick={openMenu}>
          MŁODZIEŻ
        </Link>
        <span>/</span>
        <Link to="/kobiety/" activeClassName="activeLink" onClick={openMenu}>
          KOBIETY
        </Link>
      </div>
      <Link to="/o-mnie/" activeClassName="activeLink" onClick={openMenu}>
        O MNIE
      </Link>
      <Link to="/blog/" activeClassName="activeLink" onClick={openMenu}>
        BLOG
      </Link>
      <Link to="/calendly/" activeClassName="activeLink" onClick={openMenu}>
        CALENDLY
      </Link>
      <Link to="/opinie/" activeClassName="activeLink" onClick={openMenu}>
        OPINIE
      </Link>
    </StyledFooterNav>
  );
};

export default Nav;
