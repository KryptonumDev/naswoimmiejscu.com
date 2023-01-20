import React from "react";
import { Helmet } from "react-helmet";

import Header from "../Header/Header";
import GlobalStyle from "../../styles/GlobalStyle";
import Footer from "../Footer/Footer";

const GlobalTemplate = ({ children, isLayout }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "pl",
        }}
      >
        <meta name="robots" content="noindex" />
      </Helmet>
      <GlobalStyle islayout={isLayout} />
      {!isLayout ? <Header /> : null}
      {children}
      {!isLayout ? <Footer /> : null}
    </>
  );
};

export default GlobalTemplate;
