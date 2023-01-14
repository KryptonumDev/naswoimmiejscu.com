import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";

import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import WhiteCircle from "../WhiteCircle/WhiteCircle";
import Button from "../Button/Button";

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
} from "./StyledFooter";
import SmallGreenCircle from "../SmallGreenCircle/SmallGreenCircle";

const Footer = () => {
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
                  gatsbyImageData
                }
              }
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
          }
        }
      }
    }
  `);
  const shortData = data.wpPage.global.stopka;

  return (
    <Container className="footer">
      <StyledFooter>
        <StyledLeftWrapper>
          <Logo
            hadDeclaredMargin="0 0 54px 0"
            logoDesktop={shortData.logo}
            logoMobile={shortData.logoMobile}
            isHeader
            isFooter
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
          <StyledFooterLinks hideMobile>
            <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
            <Link to="/regulamin">Regulamin</Link>
          </StyledFooterLinks>
        </StyledRightWrapper>
        <StyledCircleWrapper>
          <WhiteCircle />
        </StyledCircleWrapper>
      </StyledFooter>
    </Container>
  );
};

export default Footer;
