import styled from "styled-components";

export const StyledAboutMeFirstSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 96px;
  gap: clamp(100px, 8.698vw, 200px);
  position: relative;

  @media only screen and (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 16px;
    margin-top: 84px;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;
  max-width: 686px;

  @media only screen and (max-width: 992px) {
    width: 100%;
    max-width: unset;
  }
`;

export const StyledRightWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media only screen and (max-width: 992px) {
    width: 100%;
    justify-content: flex-start;

    .gatsby-image-wrapper {
      width: 100%;
    }
  }

  @media only screen and (max-width: 360px) {
    height: 219px;
  }
`;

export const StyledMobileTopCircle = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    position: absolute;
    top: -15px;
    left: -15px;
  }
`;

export const StyledMobileBottomCircle = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    position: absolute;
    bottom: -50px;
    right: -50px;
  }
`;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  z-index: -1;
  width: 40.313vw;
  height: 40.313vw;
  left: -18.854vw;
  top: 11.375vw;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;
