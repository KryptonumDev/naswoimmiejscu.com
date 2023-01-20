import styled from "styled-components";

export const StyledMeetsFormwomens = styled.div`
  gap: clamp(100px, 7.708vw, 200px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 8.958vw;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;
  position: relative;

  .gatsby-image-wrapper {
    height: 100%;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledRightWrapper = styled.div`
  width: 50%;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;

  @media only screen and (max-width: 992px) {
    display: none;
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
