import React from "react";
import { Helmet } from "react-helmet";

import Header from "../Header/Header";
import GlobalStyle from "../../styles/GlobalStyle";
import Footer from "../Footer/Footer";

const GlobalTemplate = ({ children, isLayout }) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "pl" }}>
        <meta name="robots" data-react-helmet="true" />
      </Helmet>
      <GlobalStyle />
      {isLayout && <Header />}
      {children}
      {isLayout && <Footer />}
    </>
  );
};

export default GlobalTemplate;
