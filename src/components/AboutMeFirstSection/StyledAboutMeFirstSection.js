import styled from "styled-components";

export const StyledAboutMeFirstSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: clamp(30px, 10.156vw, 195px);
  position: relative;

  @media only screen and (max-width: 992px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 16px;
    margin-top: 6px;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;
  max-width: 686px;

  @media only screen and (max-width: 992px) {
    width: 100%;
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
    z-index: -1;
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
