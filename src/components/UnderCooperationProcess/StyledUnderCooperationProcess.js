import styled from "styled-components";

export const StyledUnderCooperationProcess = styled.div`
  margin: 110px auto 0;
  width: 100%;
  max-width: 1920px;

  @media only screen and (max-width: 992px) {
    margin-top: 30px;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;

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

export const StyledTextWrapper = styled.div`
  font: 300 20px Roboto;
  color: var(--normalBlack);
  max-width: 584px;
  margin-bottom: 50px;

  strong {
    font-weight: 600;
  }

  @media only screen and (max-width: 992px) {
    max-width: unset;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 528px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 360px) {
    font-size: 15px;
  }
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 50px auto 0;
  padding: 0 125px 0 180px;
  max-width: 1920px;
  gap: 40px;

  @media only screen and (max-width: 1167px) {
    padding: 0 33px;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

export const StyledAnimationWrapper = styled.div``;

export const StyledLine = styled.div`
  width: 90%;
  height: 2px;
  background-color: var(--normalBlack);
  max-width: 1671px;

  @media only screen and (max-width: 1167px) {
    display: none;
  }
`;
