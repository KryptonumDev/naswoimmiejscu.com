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

const BlogCard = ({
  category,
  title,
  desc,
  btnText,
  slug,
  imageDesktop,
}) => {
  const btnData = {
    url: `/artykul/${slug}`,
    title: btnText,
    target: null,
  };

  return (
    <StyledBlogCard to={`/artykul/${slug}`}>
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
        <Image className="image" imageDesktop={imageDesktop} />
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
        <StyledDescWrapper dangerouslySetInnerHTML={{__html: desc}}></StyledDescWrapper>
        <Button
          variant={'green'}
          btnData={btnData}
          haswidth="245px"
          hasheight="78px"
          hasfontsize="16px"
          className='link'
        />
      </StyledTextWrapper>
    </StyledBlogCard>
  );
};

export default BlogCard;
