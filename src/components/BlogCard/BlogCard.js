import React from "react";

import Image from "../Image/Image";
import Button from "../Button/Button";

import { StyledText } from "../Text/StyledText";
import {
  StyledBlogCard,
  StyledImageWrapper,
  StyledTextWrapper,
  StyledTitleWrapper,
  StyledDescWrapper,
  StyledMobileCategory,
} from "./StyledBlogCard";

const BlogCard = ({ category, title, desc, date, btnText, slug, image }) => {
  const btnData = {
    url: slug,
    title: btnText,
    target: null,
  };

  return (
    <StyledBlogCard to="/">
      <StyledImageWrapper>
        <StyledMobileCategory>
          <StyledText
            hasdeclaredtexttransform="uppercase"
            hasdeclaredfontcolor="var(--normalBlack)"
            hasdeclaredfontweight="700"
            hasdeclaredfontsize="10px"
          >
            {category}
          </StyledText>
        </StyledMobileCategory>
        {/* <Image imageDesktop={image} /> */}
      </StyledImageWrapper>
      <StyledTextWrapper>
        <StyledText
          hasdeclaredtexttransform="uppercase"
          hasdeclaredfontcolor="var(--normalBlack)"
          hasdeclaredfontweight="700"
          hasdeclaredmargin="0 0 20px 0"
        >
          {category}
        </StyledText>
        <StyledTitleWrapper>{title}</StyledTitleWrapper>
        <StyledDescWrapper>{desc}</StyledDescWrapper>
        <StyledText
          hasdeclaredfontcolor="var(--normalBlack)"
          hasdeclaredfontweight="700"
          hasdeclaredmargin="0 0 30px 0"
        >
          {date} r.
        </StyledText>
        <Button
          btnData={btnData}
          haswidth="245px"
          hasheight="78px"
          hasfontsize="16px"
        />
      </StyledTextWrapper>
    </StyledBlogCard>
  );
};

export default BlogCard;
