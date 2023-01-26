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
  StyledElements,
} from "./StyledEffectWomens";
import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";
import { StyledCircle } from "../Circle/StyledCircle";

const EffectWomens = ({
  image,
  imageMobile,
  title,
  listElements,
  desc,
  isWomens,
}) => {
  return (
    <Container>
      <StyledEffectWomens iswomens={isWomens}>
        <StyledLeftWrapper>
          <StyledTitleWrapper className="effect-womens-title">
            {title ? parse(title) : null}
          </StyledTitleWrapper>
          <StyledDescWrapper className="effect-womens-title">
            {desc ? parse(desc) : null}
          </StyledDescWrapper>
          {isWomens ? (
            <StyledElements>
              {listElements.map((li) => (
                <div>
                  <Image imageDesktop={li.ikonka} objectFit="contain" />
                  {li.tekstListy ? parse(li.tekstListy) : null}
                </div>
              ))}
            </StyledElements>
          ) : (
            <StyledList>
              {listElements.map((li) => (
                <li>
                  <Image imageDesktop={li.ikonka} />
                  {li.tekstListy ? parse(li.tekstListy) : null}
                </li>
              ))}
            </StyledList>
          )}
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
