import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import HamburgerButton from "../HamburgerButton/HamburgerButton";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Nav from "../Nav/Nav";

import scrollLock from "../../utils/scrollLock";

import { StyledHeader, StyledLogoWrapperHeader } from "./StyledHeader";

const Header = () => {
  const data = useStaticQuery(graphql`
    query headerData {
      wpPage(id: { eq: "cG9zdDoxOA==" }) {
        global {
          przycisk {
            target
            title
            url
          }
          logo {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
          logoMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100)
              }
            }
          }
        }
      }
    }
  `);
  const shortData = data.wpPage.global;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      scrollLock.enable('header')
    } else {
      scrollLock.disable('header')
    }
  }, [isOpen])

  return (
    <StyledHeader>
      <StyledLogoWrapperHeader>
        <Logo
          isHeader="true"
          logoDesktop={shortData.logo}
          logoMobile={shortData.logoMobile}
        />
      </StyledLogoWrapperHeader>
      <Nav
        isOpen={isOpen}
        logoDesktop={shortData.logo}
        logoMobile={shortData.logoMobile}
        openMenu={() => { setIsOpen(false) }}
      />
      <Button
        btnData={shortData.przycisk}
        variant="green"
        haswidth="254px"
        hasheight="78px"
        hasfontsize="16px"
        className="header-btn"
      />
      <HamburgerButton openMenu={() => { setIsOpen(!isOpen) }} isOpen={isOpen} />
    </StyledHeader>
  );
};

export default Header;
