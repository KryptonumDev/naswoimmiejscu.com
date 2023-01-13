import React from "react";
import parse from "html-react-parser";

import Button from "../Button/Button";
import Image from "../Image/Image";
import Container from "../Container/Container";
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
} from "./StyledHomeAboutMe";

const HomeAboutMe = ({ data }) => {
  return (
    <Container>
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
            <StyledCircle hasdeclaredbg="var(--normalGreen)" />
          </StyledBottomCircle>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledTitleWrapper>
            {data.tytulPoPrawo ? parse(data.tytulPoPrawo) : null}
          </StyledTitleWrapper>
          <StyledDescWrapper>
            {data.opisPoPrawo ? parse(data.opisPoPrawo) : null}
          </StyledDescWrapper>
          <Button
            btnData={data.przycisk}
            variant="green"
            haswidth="355px"
            hasheight="88px"
            hasfontsize="20px"
          />
        </StyledRightWrapper>
      </StyledHomeAboutMe>
    </Container>
  );
};

export default HomeAboutMe;
