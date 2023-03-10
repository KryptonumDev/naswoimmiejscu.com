import styled from "styled-components";

export const StyledHomeAboutMe = styled.div`
  display: flex;
  margin-top: clamp(30px, 13.177vw, 253px);
  align-items: center;
  gap: clamp(100px, 8.698vw, 169px);
  position: relative;

  @media only screen and (max-width: 1167px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 35px;
    margin-top: 32px;
    align-items: flex-start;
  }
`;

export const StyledRightWrapper = styled.div`
  max-width: 880px;
  width: 55%;

  @media only screen and (max-width: 1167px) {
    width: 100%;
    max-width: unset;
  }

  @media only screen and (max-width: 992px){
    padding-left: 22px;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 45%;
  max-width: 606px;
  position: relative;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 1167px) {
    width: 80%;
    max-width: unset;
  }
`;

export const StyledTopCircle = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  z-index: 1;

  @media only screen and (max-width: 1167px) {
    display: none;
  }
`;

export const StyledBottomCircle = styled.div`
  position: absolute;
  bottom: -50px;
  right: -50px;
  z-index: 1;

  @media only screen and (max-width: 1225px) {
    bottom: -21px;
    right: -21px;
  }
`;

export const StyledGreenCircle = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    width: 33.065vw;
    height: 33.065vw;
    position: absolute;
    right: -22.177vw;
    top: 0;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 360px) {
    width: 60.111vw;
    height: 60.111vw;
    right: -50vw;
  }
`;
