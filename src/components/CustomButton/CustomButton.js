import React from "react";

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
  imageHeight
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
      imageheight={imageHeight}
      aria-label="przycisk"
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
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  &.mobile{
    display: none;
  }
`