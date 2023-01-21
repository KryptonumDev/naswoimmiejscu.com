import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";
import { useLocation } from "@reach/router";

import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import WhiteCircle from "../WhiteCircle/WhiteCircle";
import Button from "../Button/Button";
import BigGreenCircle from "../BigGreenCircle/BigGreenCircle";
import SmallGreenCircle from "../SmallGreenCircle/SmallGreenCircle";

import {
  StyledFooter,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledCopyright,
  StyledTopText,
  StyledBottomText,
  StyledCircleWrapper,
  StyledFooterLinks,
  StyledRightWrapperContent,
  StyledSmallGreenCircle,
  StyledMobileGreenCircle,
} from "./StyledFooter";
import { useScreenService } from "../../utils/useScreenService";

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
            logoMobile {
              altText
              title
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
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
          }
        }
      }
    }
  `);
  const shortData = data.wpPage.global.stopka;
  const { isLgUp } = useScreenService();

  return (
    <Container className="footer">
      <StyledFooter smallgap={location.pathname === "/kontakt/" && !isLgUp}>
        <StyledLeftWrapper>
          <Logo
            hadDeclaredMargin="0 0 54px 0"
            logoDesktop={shortData.logo}
            logoMobile={shortData.logoMobile}
            isHeader="true"
            isFooter="true"
          />
          <Nav isFooter isOpen={false} />
          <StyledFooterLinks>
            <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
            <Link to="/regulamin">Regulamin</Link>
          </StyledFooterLinks>
          <StyledCopyright>
            <StyledTopText>
              {shortData.coopyrightGornaLinia
                ? parse(shortData.coopyrightGornaLinia)
                : null}
            </StyledTopText>
            <StyledBottomText>
              {shortData.coopyrightDolnaLinia
                ? parse(shortData.coopyrightDolnaLinia)
                : null}
            </StyledBottomText>
          </StyledCopyright>
          <StyledSmallGreenCircle>
            <SmallGreenCircle />
          </StyledSmallGreenCircle>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          {location.pathname === "/kontakt/" && !isLgUp ? null : (
            <StyledRightWrapperContent>
              {shortData.tekstObokPrzycisku
                ? parse(shortData.tekstObokPrzycisku)
                : null}
              <Button
                btnData={shortData.przycisk}
                variant="green"
                haswidth="366px"
                hasheight="88px"
                hasfontsize="24px"
                className="footer"
              />
            </StyledRightWrapperContent>
          )}
          <StyledFooterLinks hideMobile>
            <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
            <Link to="/regulamin">Regulamin</Link>
          </StyledFooterLinks>
        </StyledRightWrapper>
        <StyledCircleWrapper>
          <WhiteCircle />
        </StyledCircleWrapper>
        <StyledMobileGreenCircle>
          <BigGreenCircle />
        </StyledMobileGreenCircle>
      </StyledFooter>
    </Container>
  );
};

export default Footer;
