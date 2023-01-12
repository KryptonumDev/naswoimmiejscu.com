import React from "react";

import { StyledLogo, StyledImage } from "./StyledLogo";

const Logo = ({ hasMaxWidth, hadDeclaredMargin, logoDesktop, logoMobile }) => {
  return (
    <StyledLogo hasmaxwidth={hasMaxWidth} hasdeclaredmargin={hadDeclaredMargin}>
      {logoDesktop ? <StyledImage imageDesktop={logoDesktop} imageMobile={logoMobile} /> : null}
    </StyledLogo>
  );
};

export default Logo;
