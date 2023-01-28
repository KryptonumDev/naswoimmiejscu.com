import styled from "styled-components";

export const StyledFAQMargin = styled.div`
  margin-bottom: clamp(70px, 5.208vw, 100px);
`;

export const StyledContentWrapper = styled.div`
  margin-top: clamp(40px, 7.917vw, 152px);
  gap: 4.167vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: clamp(90px, 5.708vw, 113px);

  @media only screen and (max-width: 992px) {
    flex-direction: column-reverse;
    margin-bottom: 0;
    margin-top: 38px;
    align-items: flex-start;
    gap: 0;
  }
`;

export const StyledLeftWrapper = styled.div`
  max-width: 800px;
  width: 50%;

  @media only screen and (max-width: 1920px) {
    width: 100%;
    max-width: unset;
  }
`;

export const StyledRightWrapper = styled.div`
  position: relative;
  width: 50%;

  .gatsby-image-wrapper {
    height: 100%;
  }

  @media only screen and (max-width: 1920px) {
    width: 100%;
  }

  @media only screen and (max-width: 992px) {
    margin-bottom: 20px;
    width: 85%;
  }

  @media only screen and (max-width: 668px) {
    width: 100%;
  }
`;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  right: -50px;
  bottom: -50px;
`;

export const StyledButtonsWrapper = styled.div`
  gap: clamp(11px, 1.615vw, 31px);
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 992px) {
    gap: 17px;
    margin-top: 59px;
  }
`;

export const StyledMobileCircle = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    position: absolute;
    top: -15px;
    left: -15px;
    z-index: 2;
  }
`;

export const StyledBigWhiteCircle = styled.div`
  width: 40.313vw;
  height: 40.313vw;
  position: absolute;
  right: -23.438vw;
  bottom: -13.021vw;
  z-index: -1;

  @media only screen and (min-width: 1920px) {
    right: -450px;
    bottom: -250px;
    width: 774px;
    height: 774px;
  }

  @media only screen and (max-width: 1167px) {
    display: none;
  }
`;
