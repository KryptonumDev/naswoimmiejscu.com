import React from "react";
import parse from "html-react-parser";

import Image from "../Image/Image";
import Container from "../Container/Container";

import {
  StyledEffectWomens,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledList,
  StyledCircleWrapper,
} from "./StyledEffectWomens";
import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";
import { StyledCircle } from "../Circle/StyledCircle";

const EffectWomens = ({ image, imageMobile, title, listElements, desc }) => {
  return (
    <Container>
      <StyledEffectWomens>
        <StyledLeftWrapper>
          <StyledTitleWrapper className="effect-womens-title">
            {title ? parse(title) : null}
          </StyledTitleWrapper>
          <StyledDescWrapper className="effect-womens-title">
            {desc ? parse(desc) : null}
          </StyledDescWrapper>
          <StyledList>
            {listElements.map((li) => (
              <li>
                <Image imageDesktop={li.ikonka} />
                {li.tekstListy ? parse(li.tekstListy) : null}
              </li>
            ))}
          </StyledList>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledCircleWrapper>
            <StyledCircle hasdeclaredbg="var(--normalGreen)" />
          </StyledCircleWrapper>
          <Image imageDesktop={image} imageMobil={imageMobile} />
        </StyledRightWrapper>
      </StyledEffectWomens>
    </Container>
  );
};

export default EffectWomens;
