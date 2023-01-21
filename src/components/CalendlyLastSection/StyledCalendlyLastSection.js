import styled from "styled-components";

export const StyledCalendlyLastSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: clamp(100px, 7.344vw, 141px);
  margin-bottom: clamp(120px, 9.115vw, 175px);
  gap: clamp(30px, 3.333vw, 64px);

  @media only screen and (max-width: 992px) {
    gap: 28px;
    flex-direction: column-reverse;
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
  position: relative;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;
