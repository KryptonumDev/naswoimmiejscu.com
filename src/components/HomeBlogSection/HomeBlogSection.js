import React, { useState } from "react";
import parse from "html-react-parser";

import { StyledCircle } from "../Circle/StyledCircle";
import {
  StyledHomeBlogSection,
  StyledContent,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledDescWrapper,
  StyledTitleElement,
} from "./StyledHomeBlogSection";

const HomeBlogSection = ({ data }) => {
  const [isBlog, setIsBlog] = useState(true);

  return (
    <StyledHomeBlogSection>
      <StyledLeftWrapper>
        <StyledContent
          onClick={() => setIsBlog(true)}
          type="button"
          hasdeclaredpadding="64px 87px 0 0"
          isactive={isBlog}
        >
          <StyledCircle hasdeclaredbg="var(--normalGreen)" />
          <StyledTitleElement>
            {data.blogTytul ? parse(data.blogTytul) : null}
          </StyledTitleElement>
          <StyledDescWrapper isleft>
            {data.blogTytul ? parse(data.blogOpis) : null}
          </StyledDescWrapper>
        </StyledContent>
        <StyledContent
          onClick={() => setIsBlog(false)}
          type="button"
          isright
          hasdeclaredpadding="0 87px 0 0"
          isactive={!isBlog}
        >
          <StyledCircle />
          <StyledTitleElement>
            {data.rekomendacjeTytul ? parse(data.rekomendacjeTytul) : null}
          </StyledTitleElement>
          <StyledDescWrapper>
            {data.rekomendacjeOpis ? parse(data.rekomendacjeOpis) : null}
          </StyledDescWrapper>
        </StyledContent>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        {isBlog ? (
          <div>tutaj będzie blog</div>
        ) : (
          <div>tutaj będą rekomendacje</div>
        )}
      </StyledRightWrapper>
    </StyledHomeBlogSection>
  );
};

export default HomeBlogSection;
