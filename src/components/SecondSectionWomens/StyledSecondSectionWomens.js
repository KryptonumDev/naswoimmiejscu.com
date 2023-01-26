import styled from "styled-components";

export const StyledSecondSectionWomens = styled.div`
  gap: clamp(40px, 4.583vw, 88px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: clamp(120px, 9.583vw, 184px);

  @media only screen and (max-width: 992px) {
    gap: 20px;
    flex-direction: column;
  }

  @media only screen and (max-width: 992px) {
    margin-top: 54px;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 40%;
  padding-left: 85px;

  @media only screen and (max-width: 1167px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
  }

  @media only screen and (max-width: 360px) {
    .gatsby-image-wrapper {
      height: 248px;
    }
  }
`;

export const StyledRightWrapper = styled.div`
  width: 70%;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledGreenCircleWrapper = styled.div`
  position: absolute;
  bottom: -17.042vw;
  left: -15.458vw;
  z-index: 1;
  width: 37.552vw;
  height: 37.552vw;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;
