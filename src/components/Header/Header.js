import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import HamburgerButton from "../HamburgerButton/HamburgerButton";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Nav from "../Nav/Nav";

import { StyledHeader } from "./StyledHeader";

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
        <Logo logoDesktop={shortData.logo} logoMobile={shortData.logoMobile} />
        <Nav />
        <Button
          btnData={shortData.przycisk}
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
