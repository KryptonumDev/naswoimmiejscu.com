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
import { Link } from "../TransitionLink/TransitionLink";

const BlogCard = ({
  category,
  title,
  desc,
  btnText,
  slug,
  imageDesktop,
}) => {
  const btnData = {
    url: `/blog/${slug}`,
    title: btnText,
    target: null,
  };

  return (
    <Link to={`/blog/${slug}`}>
      <StyledBlogCard>
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
          <StyledDescWrapper dangerouslySetInnerHTML={{ __html: desc }}></StyledDescWrapper>
          <Button
            tabIndex='-1'
            text={btnData.title}
            variant={'green'}
            btnData={btnData}
            haswidth="245px"
            hasheight="78px"
            hasfontsize="16px"
            className='link'
            ariaLabel="link"
          />
        </StyledTextWrapper>
      </StyledBlogCard>
    </Link>
  );
};

export default BlogCard;
