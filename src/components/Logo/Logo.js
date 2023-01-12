import React from "react";

import { StyledLogo } from "./StyledLogo";

const Logo = ({ hasMaxWidth, hadDeclaredMargin }) => {
  return (
    <StyledLogo hasmaxwidth={hasMaxWidth} hasdeclaredmargin={hadDeclaredMargin}>
      logo
    </StyledLogo>
  );
};

export default Logo;
