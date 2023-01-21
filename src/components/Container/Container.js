import React from "react";

import { StyledContainer } from "./StyledContainer";

const Container = ({ children, className, hideY }) => {
  return (
    <StyledContainer hidey={hideY} className={className}>
      {children}
    </StyledContainer>
  );
};

export default Container;
