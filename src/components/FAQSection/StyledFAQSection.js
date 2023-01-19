import styled from "styled-components";

export const StyledFAQSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: clamp(100px, 8.698vw, 200px);
  max-width: 1920px;
  margin: 100px auto 0;
  padding-left: 128px;

  @media only screen and (max-width: 1167px) {
    padding-left: 33px;
  }

  @media only screen and (max-width: 992px) {
    margin-top: 30px;
    gap: 20px;
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
  margin-bottom: 128px;

  @media only screen and (max-width: 1763px) {
    font-size: 2.95vw;
  }

  @media only screen and (max-width: 1499px) {
    font-size: 2.802vw;
  }

  @media only screen and (max-width: 1349px) {
    font-size: 2.372vw;
  }

  @media only screen and (max-width: 992px) {
    font-size: 4.234vw;
    margin-bottom: 44px;
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
  gap: 60px;
`;
