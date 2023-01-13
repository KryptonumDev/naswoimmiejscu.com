import React from "react";
import parse from "html-react-parser";

import CustomButton from "../CustomButton/CustomButton";

import {
  StyledFAQElement,
  StyledQuestionWrapper,
  StyledAnswerWrapper,
  StyledIconWrapper,
  StyledQuestionContent,
} from "./StyledFAQElement";

const FAQElement = ({ iconBgColor, question, answer, iconColor }) => {
  return (
    <StyledFAQElement
      itemscope
      itemprop="mainEntity"
      itemtype="https://schema.org/Question"
    >
      <StyledQuestionWrapper>
        <StyledIconWrapper>
          <CustomButton
            hasWidth="51px"
            hasHeight="44px"
            hasIcon
            iconColor={iconColor ? "var(--arrowBlack)" : "var(--normalWhite)"}
            bgColor={iconBgColor}
          />
        </StyledIconWrapper>
        <StyledQuestionContent>
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
