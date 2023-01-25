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
  StyledCirclesWrapper,
  StyledMobileCircle,
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
          <StyledCircle hasdeclaredbg="var(--normalGreen)" />
        </StyledBrownCircle>
        <StyledTitleWrapper>
          {politykaPrywatnosCi.tytul ? parse(politykaPrywatnosCi.tytul) : null}
        </StyledTitleWrapper>
        <StyledDescWrapper>
          {politykaPrywatnosCi.kontent
            ? parse(politykaPrywatnosCi.kontent)
            : null}

          <StyledCirclesWrapper>
            <StyledCircle
              hasdeclaredbg="var(--normalGreen)"
              hasdeclaredwidth="22px"
              hasdeclaredheight="22px"
            />
            <StyledCircle
              hasdeclaredbg="var(--normalGreen)"
              hasdeclaredwidth="22px"
              hasdeclaredheight="22px"
            />
            <StyledCircle
              hasdeclaredbg="var(--normalGreen)"
              hasdeclaredwidth="22px"
              hasdeclaredheight="22px"
            />
          </StyledCirclesWrapper>
          <StyledMobileCircle>
            <StyledCircle hasdeclaredbg="var(--normalGreen)" />
          </StyledMobileCircle>
        </StyledDescWrapper>
      </StyledPrivacyPolicy>
    </Container>
  );
};

export default PrivacyPolicy;

export { Head } from "../components/Head/Head";

export const query = graphql`
  query privacyPolicyQuery {
    wpPage(id: { eq: "cG9zdDozMjU=" }) {
      seo {
        canonical
        metaDesc
        opengraphSiteName
        title
        opengraphUrl
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
      politykaPrywatnosCi {
        kontent
        tytul
      }
    }
  }
`;
