import styled from "styled-components";

export const StyledBlog = styled.div``;

export const StyledHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: clamp(80px, 8.021vw, 154px);
  font: 700 clamp(22px, 3.333vw, 64px) Roboto;
  align-items: center;
  position: relative;
  z-index: 4;
`;

export const StyledSlidesWrapper = styled.div`
  margin: 0 auto;
  padding: clamp(24px, 8.333vw, 160px) 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1120px;

  overflow: hidden;
  position: relative;
  z-index: -1;

  &::before{
    content: '';
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: calc(50vh - 200px);
    background: linear-gradient(0deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.4) 40%);
    z-index: 2;
    pointer-events: none;
  }
  &::after{
    content: '';
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(50vh - 200px);
    background: linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.4) 40%);
    z-index: 2;
    pointer-events: none;
  }
`;

export const StyledCategories = styled.div`
  display: flex;
  gap: 20px;
`;
