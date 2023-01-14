import React from "react";
import parse from "html-react-parser";

import FAQElement from "../FAQElement/FAQElement";

import {
  StyledHomeFAQSection,
  StyledTextWrapper,
  StyledFAQWrapper,
} from "./StyledHomeFAQSection";

const HomeFAQSection = ({ data }) => {
  return (
    <StyledHomeFAQSection>
      <StyledTextWrapper>
        {data.tytulPoLewej ? parse(data.tytulPoLewej) : null}
      </StyledTextWrapper>
      <StyledFAQWrapper>
        {data.element.map((faq, idx) => (
          <FAQElement
            iconBgColor={
              idx % 2 === 0 ? "var(--normalGreen)" : "var(--buttonBrownHover)"
            }
            iconColor={idx % 2 === 0}
            question={faq.pytanie}
            answer={faq.odpowiedz}
          />
        ))}
      </StyledFAQWrapper>
    </StyledHomeFAQSection>
  );
};

export default HomeFAQSection;