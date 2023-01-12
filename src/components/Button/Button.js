import React from "react";

import { StyledButton } from "./StyledButton";

const Button = ({
  text,
  variant,
  disabled,
  haswidth,
  hasheight,
  hasfontsize,
}) => {
  return (
    <StyledButton
      variant={variant}
      disabled={disabled}
      hasdeclaredwidth={haswidth}
      hasdeclaredheight={hasheight}
      hasfontsize={hasfontsize}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
