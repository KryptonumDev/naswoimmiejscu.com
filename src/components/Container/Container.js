import React from "react";

import { StyledContainer } from "./StyledContainer";

const Container = ({ as='section',children, className, hideY }) => {
  return (
    <StyledContainer as={as} hidey={hideY} className={className}>
      {children}
    </StyledContainer>
  );
};

export default Container;
