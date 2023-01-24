import React from "react";

import Arrow from "../Arrow/Arrow";
import Image from "../Image/Image";
import ArrowDesktop from "../ArrowDesktop/ArrowDesktop";

import { StyledCustomButton } from "./StyledCustomButton";

import { useScreenService } from "../../utils/useScreenService";

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
  const { isLgUp } = useScreenService();

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
      {hasIcon ? (
        isLgUp ? (
          <ArrowDesktop />
        ) : (
          <Arrow />
        )
      ) : (
        <Image imageDesktop={image} />
      )}
    </StyledCustomButton>
  );
};

export default CustomButton;
