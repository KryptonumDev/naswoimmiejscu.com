import styled from "styled-components";

export const StyledUnderCooperationProcess = styled.div`
  margin: 110px auto 0;
  width: 100%;
  max-width: 1920px;
  position: relative;

  @media only screen and (max-width: 992px) {
    margin-top: 0;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 40%;

  @media only screen and (max-width: 1850px){
    width: 50%;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledRightWrapper = styled.div`
  width: 60%;
  
  @media only screen and (max-width: 1850px){
    width: 50%;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledTextWrapper = styled.div`
  font: 300 20px/1.2em Roboto;
  color: var(--normalBlack);
  max-width: 584px;
  margin-bottom: 38px;

  strong {
    font-weight: 600;
  }

  @media only screen and (max-width: 992px) {
    max-width: unset;
    margin-bottom: 0;
    font-size: 2.218vw;
  }

  @media only screen and (max-width: 528px) {
    font-size: 3.409vw;
  }

  @media only screen and (max-width: 360px) {
    font-size: 4.167vw;
  }
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 50px auto 0;
  padding: 0 clamp(70px, 6.510vw, 125px) 0 clamp(120px, 9.375vw, 180px);
  max-width: 1920px;
  gap: clamp(40px, 8.698vw, 180px);

  @media only screen and (max-width: 1167px) {
    padding: 0 22px;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    margin-top: 0;
    gap: 22px;
  }
`;

export const StyledAnimationWrapper = styled.div`
  position: relative;
`;

export const StyledLine = styled.div`
  width: 87vw;
  height: 2px;
  background-color: var(--normalBlack);
  max-width: 1671px;
  opacity: 0.24;

  @media only screen and (max-width: 992px){
    display: none;
  }
`;

export const StyledFirstIcon = styled.div`
  position: absolute;
  left: 48vw;
  transform: translateX(-50%);
  top: -22px;

  @media only screen and (max-width: 992px) {
    display: ${({ ishide }) => (ishide ? "none" : "flex")};
    position: relative;
    margin: 22px auto 0;
    left: auto;
    top: auto;
    transform: translateX(0);
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledSecondIcon = styled.div`
  position: absolute;
  left: 90%;
  transform: translateX(-50%);
  top: -30px;

  @media only screen and (max-width: 992px) {
    display: ${({ ishide }) => (ishide ? "none" : "flex")};
    position: relative;
    margin: 0 auto;
    left: auto;
    top: auto;
    transform: translateX(0);
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 55px;
  }
`;

export const StyledCircleWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    margin: 0 auto;
  }
`;
