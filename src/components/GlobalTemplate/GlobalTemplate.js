import React from "react";
import { Helmet } from 'react-helmet'

import Header from "../Header/Header";
import GlobalStyle from "../../styles/GlobalStyle";
import Footer from "../Footer/Footer";

const GlobalTemplate = ({ children }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "pl",
        }}
      >
        <meta name="robots" content="noindex" />
      </Helmet>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default GlobalTemplate;
