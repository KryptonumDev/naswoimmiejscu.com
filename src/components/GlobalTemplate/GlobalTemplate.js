import React from "react";

import Header from "../Header/Header";
import GlobalStyle from "../../styles/GlobalStyle";

const GlobalTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
};

export default GlobalTemplate;
