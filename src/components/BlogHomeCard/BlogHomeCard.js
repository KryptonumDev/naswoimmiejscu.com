import React from "react";
import parse from "html-react-parser";

import Image from "../Image/Image";

import {
  StyledBlogHomeCard,
  StyledTextWrapper,
  StyledImageWrapper,
  StyledTitle,
  StyledDesc,
  StyledDate,
} from "./StyledBlogHomeCard";
import { StyledText } from "../Text/StyledText";

const BlogHomeCard = ({ image, title, desc, date, slug }) => {
  return (
    <StyledBlogHomeCard to="/">
      <StyledTextWrapper>
        <StyledTitle>{title ? parse(title) : null};</StyledTitle>
        <StyledDesc>{desc ? parse(desc) : null};</StyledDesc>
        <StyledDate>
          <StyledText
            hasdeclaredfontweight="700"
            hasdeclaredfontcolor="var(--normalBlack)"
            hasdeclaredfontsize="clamp(10px, 0.677vw, 13px)"
            hasdeclaredtextalign="right"
            hasdeclaredmargin="10px 0 0 0"
          >
            {date}
          </StyledText>
        </StyledDate>
      </StyledTextWrapper>
      <StyledImageWrapper>
        {/* <Image imageDesktop={image} /> */}
      </StyledImageWrapper>
    </StyledBlogHomeCard>
  );
};

export default BlogHomeCard;
