import styled from "styled-components";

export const Styled404 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const StyledTitle = styled.div`
  font: 700 10.417vw Roboto;
  margin-top: 80px;

  @media only screen and (min-width: 1920px) {
    font-size: 200px;
    margin-top: 73px;
  }

  @media only screen and (max-width: 1167px) {
    font-size: clamp(100px, 12.853vw, 150px);
  }
`;

export const StyledDescWrapper = styled.div`
  font: 700 2.083vw Roboto;
  margin-top: 70px;
  text-align: center;

  @media only screen and (min-width: 1920px) {
    font-size: 40px;
    margin-top: 73px;
  }

  @media only screen and (max-width: 1167px) {
    font-size: clamp(20px, 4.113vw, 48px);
  }
`;

export const StyledSecondDescWrapper = styled.div`
  font: 400 1.25vw Roboto;
  margin-top: 32px;
  margin-bottom: 80px;
  text-align: center;

  @media only screen and (min-width: 1920px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 1167px) {
    font-size: clamp(20px, 2.742vw, 32px);
  }
`;

export const StyledCircleWrapper = styled.div`
  width: 49.871vw;
  height: 49.871vw;
  position: absolute;
  right: -21.422vw;
  bottom: -21.422vw;

  @media only screen and (min-width: 1920px) {
    right: -250px;
    bottom: -250px;
    width: 582px;
    height: 582px;
  }

  @media only screen and (max-width: 1167px) {
    display: none;
  }
`;

export const StyledWhiteCircle = styled.div`
  position: absolute;
  width: 40.313vw;
  height: 40.313vw;
  left: -36.458vw;
  top: -20.833vw;

  @media only screen and (min-width: 1920px) {
    width: 774px;
    height: 774px;
    left: -700px;
    top: -400px;
  }

  @media only screen and (max-width: 1473px) {
    left: -60vw;
  }

  @media only screen and (max-width: 1167px) {
    display: none;
  }
`;
