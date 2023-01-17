import React from "react";
import { graphql } from "gatsby";
import parse from "html-react-parser";

import Container from "../components/Container/Container";
import WhiteCircle from "../components/WhiteCircle/WhiteCircle";
import BigGreenCircle from "../components/BigGreenCircle/BigGreenCircle";

import {
  StyledPrivacyPolicy,
  StyledTitleWrapper,
  StyledDescWrapper,
  StyledWhiteCircle,
  StyledGreenCircle,
  StyledBrownCircle,
  StyledBigGreenCircle,
} from "../components/PrivacyPolicy/StyledPrivacyPolicy";
import { StyledCircle } from "../components/Circle/StyledCircle";

const PrivacyPolicy = ({
  data: {
    wpPage: { politykaPrywatnosCi },
  },
}) => {
  return (
    <Container>
      <StyledPrivacyPolicy>
        <StyledWhiteCircle>
          <WhiteCircle />
        </StyledWhiteCircle>
        <StyledGreenCircle>
          <StyledCircle />
        </StyledGreenCircle>
        <StyledBigGreenCircle>
          <BigGreenCircle />
        </StyledBigGreenCircle>
        <StyledBrownCircle>
          <StyledCircle />
        </StyledBrownCircle>
        <StyledTitleWrapper>
          {politykaPrywatnosCi.tytul ? parse(politykaPrywatnosCi.tytul) : null}
        </StyledTitleWrapper>
        <StyledDescWrapper>
          {politykaPrywatnosCi.kontent
            ? parse(politykaPrywatnosCi.kontent)
            : null}
        </StyledDescWrapper>
      </StyledPrivacyPolicy>
    </Container>
  );
};

export default PrivacyPolicy;

export const query = graphql`
  query privacyPolicyQuery {
    wpPage(id: { eq: "cG9zdDozMjU=" }) {
      politykaPrywatnosCi {
        kontent
        tytul
      }
    }
  }
`;
