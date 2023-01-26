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
  date,
  slug,
  isCase,
}) => {
  return (
    <StyledBlogHomeCard to={`artykul/${slug}`} iscase={isCase}>
      <StyledTextWrapper>
        <StyledTitle>{title ? parse(title) : null}</StyledTitle>
        <StyledDesc>{desc ? parse(desc) : null}</StyledDesc>
        <StyledDate>
          <StyledText
            hasdeclaredfontweight="700"
            hasdeclaredfontcolor="var(--normalBlack)"
            hasdeclaredfontsize="13px"
            hasdeclaredtextalign="right"
            hasdeclaredmargin="10px 0 0 0"
          >
            {new Date(date).toLocaleString("pl", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}{" "}
            r.
          </StyledText>
        </StyledDate>
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
