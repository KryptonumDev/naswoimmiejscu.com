import React from "react";
import { Link } from "gatsby";

import { StyledNav } from "./StyledNav";

const Nav = () => {
  return (
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
  );
};

export default Nav;
