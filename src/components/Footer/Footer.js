import React from "react";
import { Link } from "gatsby";

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
  StyledRightWrapperContent
} from "./StyledFooter";

import { StyledText } from "../Text/StyledText";

const Footer = () => {
  return (
    <Container>
      <StyledFooter>
        <StyledLeftWrapper>
          <Logo hadDeclaredMargin="0 0 54px 0" />
          <Nav />
          <StyledCopyright>
            <StyledTopText>Wszelkie prawa zastrzeżone © 2022</StyledTopText>
            <StyledBottomText>Stworzone z ♥ przez Kryptonum oraz Wojdyło Design.</StyledBottomText>
          </StyledCopyright>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledRightWrapperContent>
            <StyledText
              hasdeclaredfontweight="700"
              hasdeclaredfontsize="24px"
              hasdeclaredfontcolor="var(--normalBlack)"
            >
              Odkryj swój życiowy cel
            </StyledText>
            <Button
              text="POROZMAWIAJMY"
              variant="green"
              haswidth="366px"
              hasheight="88px"
              hasfontsize="24px"
            />
          </StyledRightWrapperContent>
          <StyledFooterLinks>
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
