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
}) => {
  return text ? (
    <StyledButton
      variant={variant}
      hasdeclaredwidth={haswidth}
      hasdeclaredheight={hasheight}
      hasfontsize={hasfontsize}
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
    >
      {btnData.title}
    </StyledLink>
  );
};

export default Button;
