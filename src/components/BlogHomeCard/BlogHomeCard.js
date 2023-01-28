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

const BlogHomeCard = ({
  imageDesktop,
  imageMobile,
  title,
  desc,
  slug,
  isCase,
}) => {
  return (
    <StyledBlogHomeCard to={`artykul/${slug}`} iscase={isCase}>
      <StyledTextWrapper>
        <StyledTitle>{title ? parse(title) : null}</StyledTitle>
        <StyledDesc>{desc ? parse(desc) : null}</StyledDesc>
      </StyledTextWrapper>
      <StyledImageWrapper>
        {imageDesktop ? (
          <Image imageDesktop={imageDesktop} imageMobile={imageMobile} />
        ) : null}
      </StyledImageWrapper>
    </StyledBlogHomeCard>
    
  );
};

export default BlogHomeCard;
