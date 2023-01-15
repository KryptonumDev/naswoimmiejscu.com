import React from "react";
import parse from "html-react-parser";

import ContactForm from "../ContactForm/ContactForm";
import FAQElement from "../FAQElement/FAQElement";

import {
  StyledFAQSection,
  StyledFAQWrapper,
  StyledTitleWrapper,
  StyledFAQSWrapper,
} from "./StyledFAQSection";
import Button from "../Button/Button";

const FAQSection = ({ data }) => {
  return (
    <StyledFAQSection>
      <StyledFAQWrapper>
        <StyledTitleWrapper>
          {data.tytul ? parse(data.tytul) : null}
        </StyledTitleWrapper>
        <StyledFAQSWrapper>
          {data.element.map((faq) => (
            <FAQElement
              key={`${faq.pytanie} + ${faq.odpowiedz}`}
              question={faq.pytanie}
              answer={faq.odpowiedz}
            />
          ))}
          <Button
            btnData={data.przycisk}
            variant="green"
            haswidth="355px"
            hasheight="88px"
            hasfontsize="20px"
          />
        </StyledFAQSWrapper>
      </StyledFAQWrapper>
      <ContactForm />
    </StyledFAQSection>
  );
};

export default FAQSection;
