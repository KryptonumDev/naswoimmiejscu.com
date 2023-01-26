import React, { useState } from "react";
import parse from "html-react-parser";

import CustomButton from "../CustomButton/CustomButton";

import {
  StyledFAQElement,
  StyledQuestionWrapper,
  StyledAnswerWrapper,
  StyledIconWrapper,
  StyledQuestionContent,
} from "./StyledFAQElement";

const FAQElement = ({ question, answer, isNormalFont }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledFAQElement
      itemscope
      itemprop="mainEntity"
      itemtype="https://schema.org/Question"
      onClick={onToggle}
      open={isOpen}
    >
      <StyledQuestionWrapper open={isOpen}>
        <StyledIconWrapper open={isOpen}>
          <CustomButton
            hasWidth="44px"
            hasHeight="44px"
            hasIcon
            isFAQ
            iconColor={isOpen ? "var(--normalWhite)" : "var(--arrowBlack)"}
            bgColor={isOpen ? "var(--buttonBrownHover)" : "var(--normalGreen)"}
          />
        </StyledIconWrapper>
        <StyledQuestionContent isnormalfont={isNormalFont} open={isOpen}>
          {question ? parse(question) : null}
        </StyledQuestionContent>
      </StyledQuestionWrapper>
      <StyledAnswerWrapper
        itemscope
        itemprop="acceptedAnswer"
        itemtype="https://schema.org/Answer"
      >
        {answer ? parse(answer) : null}
      </StyledAnswerWrapper>
    </StyledFAQElement>
  );
};

export default FAQElement;
