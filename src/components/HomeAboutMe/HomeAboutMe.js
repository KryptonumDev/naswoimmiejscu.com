import React from "react";
import parse from "html-react-parser";

import Button from "../Button/Button";
import Image from "../Image/Image";
import Container from "../Container/Container";
import SmallGreenCircle from "../SmallGreenCircle/SmallGreenCircle";

import { StyledCircle } from "../Circle/StyledCircle";
import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";
import {
  StyledHomeAboutMe,
  StyledRightWrapper,
  StyledLeftWrapper,
  StyledTopCircle,
  StyledBottomCircle,
  StyledGreenCircle,
} from "./StyledHomeAboutMe";

const HomeAboutMe = ({ data }) => {
  return (
    <Container className="home-about-me">
      <StyledHomeAboutMe>
        <StyledLeftWrapper>
          <StyledTopCircle>
            <StyledCircle />
          </StyledTopCircle>
          <Image
            imageDesktop={data.zdjeciePoLewo}
            imageMobile={data.zdjeciePoLewoMobile}
          />
          <StyledBottomCircle>
            <StyledCircle
              hasdeclaredbg="var(--normalGreen)"
              className="home-about-me"
            />
          </StyledBottomCircle>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledTitleWrapper className="home-about-me">
            {data.tytulPoPrawo ? parse(data.tytulPoPrawo) : null}
          </StyledTitleWrapper>
          <StyledDescWrapper className="home-about-me">
            {data.opisPoPrawo ? parse(data.opisPoPrawo) : null}
          </StyledDescWrapper>
          <Button
            btnData={data.przycisk}
            variant="green"
            haswidth="355px"
            hasheight="88px"
            hasfontsize="20px"
            className="home-about-me"
            ariaLabel="link"
          />
        </StyledRightWrapper>
        <StyledGreenCircle>
          <SmallGreenCircle />
        </StyledGreenCircle>
      </StyledHomeAboutMe>
    </Container>
  );
};

export default HomeAboutMe;
