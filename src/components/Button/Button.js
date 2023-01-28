import React from "react";

import { StyledButton, StyledLink } from "./StyledButton";

const Button = ({
  btnData,
  text,
  variant,
  disabled,
  haswidth,
  hasheight,
  hasfontsize,
  className,
  hasClampWidth,
  hasClampHeight,
  hasBasicWidth,
  hasBasicHeight,
  tabIndex = 0
}) => {
  return text ? (
    <StyledButton
      variant={variant}
      hasdeclaredwidth={haswidth}
      hasdeclaredheight={hasheight}
      hasfontsize={hasfontsize}
      className={className}
      tabIndex={tabIndex}
    >
      {text}
    </StyledButton>
  ) : (
    <StyledLink
      to={btnData.url}
      target={btnData.target}
      variant={variant}
      disabled={disabled}
      hasdeclaredwidth={haswidth}
      hasdeclaredheight={hasheight}
      hasfontsize={hasfontsize}
      className={className}
      hasclampwidth={hasClampWidth}
      hasclampheight={hasClampHeight}
      hasbasicwidth={hasBasicWidth}
      hasbasicheight={hasBasicHeight}
      tabIndex={tabIndex}
    >
      {btnData.title}
    </StyledLink>
  );
};

export default Button;
