import styled from "styled-components";

export const StyledBlog = styled.div``;

export const StyledHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: clamp(80px, 8.021vw, 154px);
  font: 700 clamp(22px, 3.333vw, 64px) Roboto;
  align-items: center;
`;

export const StyledSlidesWrapper = styled.div`
  margin: clamp(24px, 8.333vw, 160px) auto 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1007px;
`;

export const StyledCategories = styled.div`
  display: flex;
  gap: 20px;
`;
