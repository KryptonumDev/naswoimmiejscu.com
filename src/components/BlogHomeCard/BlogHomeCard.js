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
    <StyledBlogHomeCard>
      <StyledTextWrapper>
        <StyledTitle>{title ? parse(title) : null};</StyledTitle>
        <StyledDesc>{desc ? parse(desc) : null};</StyledDesc>
        <StyledDate>
          <StyledText>{date}</StyledText>
        </StyledDate>
      </StyledTextWrapper>
      <StyledImageWrapper>
        {/* <Image imageDesktop={image} /> */}
      </StyledImageWrapper>
    </StyledBlogHomeCard>
  );
};

export default BlogHomeCard;
