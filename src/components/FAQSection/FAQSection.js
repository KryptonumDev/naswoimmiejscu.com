import React from "react";
import parse from "html-react-parser";

import ContactForm from "../ContactForm/ContactForm";
import FAQElement from "../FAQElement/FAQElement";
import Button from "../Button/Button";

import {
  StyledFAQSection,
  StyledFAQWrapper,
  StyledTitleWrapper,
  StyledFAQSWrapper,
} from "./StyledFAQSection";

const FAQSection = ({
  smallMgBottom,
  data,
  btnWidth,
  isNormalFont,
  hasLeftPadding,
}) => {
  return (
    <StyledFAQSection hasleftpadding={hasLeftPadding}>
      <StyledFAQWrapper>
        <StyledTitleWrapper smallmg={smallMgBottom}>
          {data.tytul ? parse(data.tytul) : null}
        </StyledTitleWrapper>
        <StyledFAQSWrapper>
          {data.element.map((faq) => (
            <FAQElement
              key={`${faq.pytanie} + ${faq.odpowiedz}`}
              question={faq.pytanie}
              answer={faq.odpowiedz}
              isNormalFont={isNormalFont}
            />
          ))}
          <Button
            btnData={data.przycisk}
            variant={"green"}
            haswidth={btnWidth ? btnWidth : "355px"}
            hasheight="88px"
            className="btn-faq-section"
            hasClampWidth="25.781vw"
            hasfontsize="clamp(16px, 1.042vw, 20px)"
            hasBasicWidth="277px"
            hasBasicHeight="73px"
          />
        </StyledFAQSWrapper>
      </StyledFAQWrapper>
      <ContactForm />
    </StyledFAQSection>
  );
};

export default FAQSection;
