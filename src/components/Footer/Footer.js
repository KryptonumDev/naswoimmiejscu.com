/** @format */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";
import { useLocation } from "@reach/router";

import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import WhiteCircle from "../WhiteCircle/WhiteCircle";
import Button from "../Button/Button";
import BigGreenCircle from "../BigGreenCircle/BigGreenCircle";
import SmallGreenCircle from "../SmallGreenCircle/SmallGreenCircle";

import { Facebook, Instagram, Linkedin } from "../../atoms/Icons";

import {
  StyledFooter,
  StyledLeftWrapper,
  StyledCopyright,
  StyledTopText,
  StyledBottomText,
  StyledCircleWrapper,
  StyledFooterLinks,
  StyledRightWrapperContent,
  StyledSmallGreenCircle,
  StyledMobileGreenCircle,
  StyledBottomWrapper,
  StyledMobileLogo,
} from "./StyledFooter";
import { Link } from "../TransitionLink/TransitionLink";

const Footer = () => {
  const location = useLocation();
  const data = useStaticQuery(graphql`
    query footerData {
      wpPage(id: { eq: "cG9zdDoxOA==" }) {
        global {
          stopka {
            coopyrightDolnaLinia
            coopyrightGornaLinia
            tekstObokPrzycisku
            przycisk {
              target
              title
              url
            }
          }
        }
      }
    }
  `);
  const shortData = data.wpPage.global.stopka;

  return (
    <Container as="div" className="footer">
      <StyledFooter
        smallgap={
          location.pathname === "/kontakt/" ||
          location.pathname === "/spotkajmy-sie/" ||
          location.pathname === "/polityka-prywatnosci/" ||
          location.pathname === "/dorosli/" ||
          location.pathname === "/gallup/" ||
          location.pathname === "/opinie/" ||
          location.pathname === "/mlodziez/" ||
          location.pathname.includes("/sukcesy/")
        }
      >
        <StyledLeftWrapper>
          <Logo isHeader="true" isFooter="true" hasMaxWidth="484px" />
          <StyledSmallGreenCircle>
            <SmallGreenCircle />
          </StyledSmallGreenCircle>
          <StyledCircleWrapper>
            <WhiteCircle />
          </StyledCircleWrapper>
          <StyledMobileGreenCircle
            difftop={
              location.pathname === "/dorosli/" ||
                location.pathname === "/mlodziez/"
                ? "true"
                : "false"
            }
          >
            <BigGreenCircle />
          </StyledMobileGreenCircle>
          <StyledRightWrapperContent
            className={
              location.pathname === "/kontakt/" ||
                location.pathname === "/spotkajmy-sie/" ||
                location.pathname === "/polityka-prywatnosci/" ||
                location.pathname === "/dorosli/" ||
                location.pathname === "/gallup/" ||
                location.pathname === "/opinie/" ||
                location.pathname.includes("/sukcesy/") ||
                location.pathname === "/mlodziez/"
                ? "desctop"
                : ""
            }
          >
            <Button
              btnData={shortData.przycisk}
              variant="green"
              haswidth="355px"
              hasheight="88px"
              hasClampHeight="4.583vw"
              hasfontsize="clamp(20px, 1.242vw, 24px)"
              hasClampWidth="18.490vw"
              hasBasicWidth="277px"
              hasBasicHeight="73px"
              className="footer"
              ariaLabel="link"
            />
          </StyledRightWrapperContent>
        </StyledLeftWrapper>
        <StyledBottomWrapper>
          <StyledCopyright>
            <StyledTopText>
              {shortData.coopyrightGornaLinia
                ? parse(shortData.coopyrightGornaLinia)
                : null}
              {` ${new Date().getFullYear()}`}
            </StyledTopText>
            <StyledBottomText>
              {shortData.coopyrightDolnaLinia
                ? parse(shortData.coopyrightDolnaLinia)
                : null}
            </StyledBottomText>
          </StyledCopyright>
          <StyledFooterLinks>
            <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
            <div className="social">
              <a href="https://www.facebook.com/agnieszkajablonskajobcoach" target="_blank" rel="noreferrer">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/na_swoim_miejscu._job_coaching/" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
              <a href="https://www.linkedin.com/in/agnieszkajablonska-jobcoach/" target="_blank" rel="noreferrer">
                <Linkedin />
              </a>
            </div>
          </StyledFooterLinks>
          <Nav isFooter isOpen={false} />
          <StyledFooterLinks hideMobile>
            <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
            <div className="social">
              <a href="https://www.facebook.com/agnieszkajablonskajobcoach" target="_blank" rel="noreferrer">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/na_swoim_miejscu._job_coaching/" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
              <a href="https://www.linkedin.com/in/agnieszkajablonska-jobcoach/" target="_blank" rel="noreferrer">
                <Linkedin />
              </a>
            </div>
          </StyledFooterLinks>
          <StyledMobileLogo>
            <Logo isHeader="true" isFooter="true" hasMaxWidth="484px" />
          </StyledMobileLogo>
        </StyledBottomWrapper>
      </StyledFooter>
    </Container>
  );
};

export default Footer;
