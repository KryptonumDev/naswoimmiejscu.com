import styled from "styled-components";

export const StyledFAQSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: clamp(80px, 5.521vw, 106px);
  max-width: 1920px;
  margin: clamp(60px, 5.208vw, 100px) auto 0;
  padding-left: ${({ hasleftpadding }) =>
    hasleftpadding ? "182px" : "clamp(32px, 6.667vw, 128px)"};

  @media only screen and (max-width: 1472px) {
    padding: 0 0 0 clamp(33px, 3vw, 60px);
  }

  @media only screen and (max-width: 992px) {
    margin-top: 30px;
    gap: 40px;
    padding-left: 0;
    flex-direction: column;
  }
`;

export const StyledFAQWrapper = styled.div`
  width: 100%;

  @media only screen and (max-width: 992px) {
    margin-top: 30px;
    padding: 0 33px;
    flex-direction: column;
  }
`;

export const StyledTitleWrapper = styled.div`
  margin-top: 60px;
  font: 700 64px Roboto;
  margin-bottom: ${({ smallmg }) => (smallmg ? "60px" : "128px")};

  @media only screen and (max-width: 1763px) {
    font-size: 2.95vw;
  }

  @media only screen and (max-width: 1499px) {
    font-size: 3.402vw;
  }

  @media only screen and (max-width: 1349px) {
    font-size: 3.872vw;
  }

  @media only screen and (max-width: 992px) {
    font-size: 4.234vw;
    margin-bottom: 29px;
    margin-top: 0;
  }

  @media only screen and (max-width: 528px) {
    font-size: 6.061vw;
  }

  @media only screen and (max-width: 360px) {
    font-size: 7.462vw;
  }
`;

export const StyledFAQSWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: clamp(30px, 2.5vw, 48px);

  @media only screen and (max-width: 992px) {
    gap: 20px;
  }
`;
