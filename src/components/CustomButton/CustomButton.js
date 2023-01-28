import React from "react";

import Arrow from "../Arrow/Arrow";
import Image from "../Image/Image";
import ArrowDesktop from "../ArrowDesktop/ArrowDesktop";

import { StyledCustomButton } from "./StyledCustomButton";

import styled from "styled-components";

const CustomButton = ({
  bgColor,
  hasWidth,
  hasHeight,
  image,
  onClick,
  type,
  imageSize,
  tabIndex = 0,
  hasIcon,
  iconColor,
  isFAQ,
  hasTransform,
  className,
  children,
}) => {

  return (
    <StyledCustomButton
      bgcolor={bgColor}
      hasdeclaredwidth={hasWidth}
      hasdeclaredheight={hasHeight}
      onClick={onClick}
      type={type}
      imagesize={imageSize}
      tabIndex={tabIndex}
      iconColor={iconColor}
      hastransform={hasTransform}
      isfaq={isFAQ}
      className={className}
    >
      {children}
      {hasIcon
        ? <>
          <ArrowWrapper className='desctop'>
            <ArrowDesktop />
          </ArrowWrapper>
        </>
        : <Image imageDesktop={image} />
      }
    </StyledCustomButton>
  );
};

export default CustomButton;


const ArrowWrapper = styled.div`
  &.mobile{
    display: none;
  }
`