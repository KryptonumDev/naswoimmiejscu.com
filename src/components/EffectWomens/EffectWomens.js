import React from "react";
import parse from "html-react-parser";

import Image from "../Image/Image";
import Container from "../Container/Container";

import {
  StyledEffectWomens,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledCircleWrapper,
  StyledElements,
  StyledWhiteMobileCircle,
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
          <StyledElements>
            {listElements.map((li, index) => (
              <li key={li.tekstListy + index}>
                <div>
                  <Image imageDesktop={li.ikonka} />
                </div>
                {li.tekstListy ? parse(li.tekstListy) : null}
              </li>
            ))}
          </StyledElements>
          {/* <StyledList ishide iswomens={isWomens}>
            {listElements.map((li) => (
              <li>
                <Image imageDesktop={li.ikonka} />
                {li.tekstListy ? parse(li.tekstListy) : null}
              </li>
            ))}
          </StyledList> */}
          <StyledWhiteMobileCircle>
            <svg
              width="465"
              height="465"
              viewBox="0 0 465 465"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="232.5"
                cy="232.5"
                r="197"
                stroke="white"
                strokeWidth="71"
              />
            </svg>
          </StyledWhiteMobileCircle>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledCircleWrapper iswomens={isWomens}>
            <StyledCircle hasdeclaredbg="var(--normalGreen)" />
          </StyledCircleWrapper>
          <Image imageDesktop={image} imageMobil={imageMobile} />
        </StyledRightWrapper>
      </StyledEffectWomens>
    </Container>
  );
};

export default EffectWomens;
