import styled from "styled-components";

export const StyledAboutMeSecondSection = styled.div`
  width: 100%;
  margin-top: 60px;
`;

export const StyledTitleWrapper = styled.div`
  text-align: center;
  font: 900 56px Roboto;
  text-transform: uppercase;
  color: var(--buttonBrownHover);
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 89px;
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 59px;
  padding-left: 20px;

  div {
    font: 300 22px Roboto;
    max-width: 655px;

    em {
      font-style: normal;
      font-size: 14px;
    }
  }
`;

export const StyledRightWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 32px;
  padding-left: 20px;

  div {
    font: 300 22px Roboto;
    max-width: 655px;

    em {
      font-style: normal;
      font-size: 14px;
    }
  }
`;

export const StyledImageWrapper = styled.div`
  margin-top: 60px;
  position: relative;
`;

export const StyledCircleWrapper = styled.div`
  width: 982px;
  height: 982px;
  position: absolute;
  top: 160px;
  right: -500px;
`;
