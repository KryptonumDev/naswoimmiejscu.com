import React from "react";
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
}) => {
  return (
    <StyledCustomButton
      bgcolor={bgColor}
      hasdeclaredwidth={hasWidth}
      hasdeclaredheight={hasHeight}
      onClick={onClick}
      type={type}
      imagesize={imageSize}
    >
      <Image imageDesktop={image} />
    </StyledCustomButton>
  );
};

export default CustomButton;
