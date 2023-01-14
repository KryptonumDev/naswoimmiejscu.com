import styled from "styled-components";

export const StyledHomeSecondSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  padding-left: 55px;
  gap: 40px;

  @media only screen and (max-width: 1167px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    margin-top: 62px;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;
  max-width: 655px;

  @media only screen and (max-width: 992px) {
    width: 100%;
    max-width: unset;
  }
`;

export const StyledRightWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const StyledContent = styled.div`
  min-height: 450px;

  @media only screen and (max-width: 992px) {
    min-height: unset;
  }
`;

export const StyledContentWrapper = styled.div`
  font: 300 20px Roboto;
  margin: 25px 0;

  strong {
    font-weight: 600;
  }

  @media only screen and (max-width: 1499px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 528px) {
    font-size: 15px;
  }
`;

export const StyledIconsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  @media only screen and (max-width: 1349px) {
    flex-direction: column;
  }
`;

export const StyledMobileImage = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    margin-top: 14px;
  }
`;
