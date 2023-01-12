import React from "react";

import Header from "../Header/Header";
import GlobalStyle from "../../styles/GlobalStyle";
import Footer from "../Footer/Footer";

const GlobalTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default GlobalTemplate;
