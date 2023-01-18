import styled from "styled-components";

export const StyledFAQSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  max-width: 1920px;
  margin: 100px auto 0;
  padding-left: 128px;

  @media only screen and (max-width: 1167px) {
    padding-left: 33px;
  }

  @media only screen and (max-width: 992px) {
    margin-top: 30px;
    padding-left: 0;
    flex-direction: column;
  }
`;

export const StyledFAQWrapper = styled.div`
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

  @media only screen and (max-width: 992px) {
    margin-bottom: 40px;
  }
`;

export const StyledFAQSWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 60px;
`;
