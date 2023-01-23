import React from "react";

import Arrow from "../Arrow/Arrow";
import Image from "../Image/Image";

import { StyledCustomButton } from "./StyledCustomButton";

const CustomButton = ({
  bgColor,
  hasWidth,
  hasHeight,
  image,
  onClick,
  type,
  imageSize,
  tabIndex,
  hasIcon,
  iconColor,
  hasTransform,
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
    >
      {hasIcon ? <Arrow /> : <Image imageDesktop={image} />}
    </StyledCustomButton>
  );
};

export default CustomButton;
