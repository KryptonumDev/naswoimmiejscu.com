import styled from "styled-components";

export const StyledAboutMeFirstSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 96px;
  gap: 40px;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;
  max-width: 686px;

  @media only screen and (max-width: 992px) {
    width: 100%;
    max-width: unset;
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
  }
`;
