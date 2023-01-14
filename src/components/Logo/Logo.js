import React from "react";

import { StyledLogo, StyledImage } from "./StyledLogo";

const Logo = ({
  hasMaxWidth,
  hadDeclaredMargin,
  logoDesktop,
  logoMobile,
  isHeader,
  isFooter,
}) => {
  return (
    <StyledLogo
      to="/"
      isheader={isHeader}
      hasmaxwidth={hasMaxWidth}
      hasdeclaredmargin={hadDeclaredMargin}
      isfooter={isFooter}
    >
      {logoDesktop ? (
        <StyledImage imageDesktop={logoDesktop} imageMobile={logoMobile} />
      ) : null}
    </StyledLogo>
  );
};

export default Logo;
