import React from "react";
import parse from "html-react-parser";

import Image from "../Image/Image";

import {
  StyledBlogHomeCard,
  StyledTextWrapper,
  StyledImageWrapper,
  StyledTitle,
  StyledDesc,
} from "./StyledBlogHomeCard";
import { Link } from "../TransitionLink/TransitionLink";

const BlogHomeCard = ({
  imageDesktop,
  imageMobile,
  title,
  desc,
  slug,
  isCase,
}) => {
  return (
    <Link to={`/blog/${slug}`} >
      <StyledBlogHomeCard iscase={isCase ? "true" : false}>
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
    </Link>
  );
};

export default BlogHomeCard;
