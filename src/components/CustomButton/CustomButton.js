import React from "react";

import { StyledCustomButton } from "./StyledCustomButton";

const CustomButton = ({ bgColor, width, height }) => {
  return (
    <StyledCustomButton
      bgcolor={bgColor}
      hasdeclaredwidth={width}
      hasdeclaredheight={height}
    >
      ikonka
    </StyledCustomButton>
  );
};

export default CustomButton;
