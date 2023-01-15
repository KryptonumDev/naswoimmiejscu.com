import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import HamburgerButton from "../HamburgerButton/HamburgerButton";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Nav from "../Nav/Nav";

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
                gatsbyImageData
              }
            }
          }
          logoMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);
  const shortData = data.wpPage.global;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
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
        />
        <Button
          btnData={shortData.przycisk}
          variant="green"
          haswidth="254px"
          hasheight="78px"
          hasfontsize="16px"
          className="header-btn"
        />
        <HamburgerButton openMenu={handleOpenMenu} isOpen={isOpen} />
      </StyledHeader>
    </Container>
  );
};

export default Header;
