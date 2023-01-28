import styled from "styled-components";

export const StyledCooperationProcess = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 120px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 125px;
  position: relative;

  @media only screen and (max-width: 1167px) {
    padding-right: 22px;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    margin-top: 39px;
    padding-right: 0;
  }
`;

export const StyledLeftWrapper = styled.div`
  transform: translateX(-5.208vw);
  height: 390px;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 992px) {
    transform: translateX(0);
  }

  @media only screen and (max-width: 360px) {
    height: 267px;
    width: 100%;
  }
`;

export const StyledRightWrapper = styled.div`
  width: 50%;
  max-width: 722px;
  padding-right: 20px;
  position: relative;
  z-index: 1;
  transform: translateX(-3.125vw);

  @media only screen and (max-width: 1167px) {
    padding-right: 20px;
    max-width: unset;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
    padding: 72px 22px 0;
    transform: translateX(0);
  }
`;

export const StyledGreenCircle = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    position: absolute;
    right: -240px;
    top: 90px;
  }

  @media only screen and (max-width: 538px) {
    top: 30px;
    right: -260px;
  }

  @media only screen and (max-width: 360px) {
    top: 80px;
  }
`;
