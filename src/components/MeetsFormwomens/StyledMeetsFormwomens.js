import styled from "styled-components";

export const StyledMeetsFormwomens = styled.div`
  gap: clamp(100px, 7.708vw, 148px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8.958vw;
  margin-bottom: clamp(150px, 9.115vw, 175px);

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 56px;
    align-items: flex-start;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 45%;
  position: relative;

  .gatsby-image-wrapper {
    height: 100%;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
  }

  @media only screen and (max-width: 360px) {
    .gatsby-image-wrapper {
      height: 249px;
    }
  }
`;

export const StyledRightWrapper = styled.div`
  width: 55%;
  position: relative;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (max-width: 992px) {
    gap: 16px;
    margin-top: 20px;
  }
`;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  bottom: -50px;
  right: -50px;
  z-index: 1;

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const StyledAhaWrapper = styled.div`
  position: absolute;
  top: -20px;
  right: -80px;
  width: clamp(400px, 37.969vw, 729px);
  height: clamp(120px, 13.75vw, 264px);

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;
