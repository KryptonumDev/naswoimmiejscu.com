import styled from "styled-components";

export const StyledHomeSecondSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  padding-left: 55px;
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;
  max-width: 655px;
`;

export const StyledRightWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

export const StyledContent = styled.div`
  min-height: 450px;
`;

export const StyledContentWrapper = styled.div`
  font: 300 20px Roboto;
  margin: 25px 0;

  strong {
    font-weight: 500;
  }
`;

export const StyledIconsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 22px;
  }
`;
