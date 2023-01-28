import styled from "styled-components";

export const StyledBlog = styled.div``;

export const StyledHeading = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  margin-top: clamp(80px, 8.021vw, 154px);
  font: 700 clamp(22px, 3.333vw, 64px) Roboto;
  align-items: center;
  position: relative;
  z-index: 4;

  h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: clamp(22px, ${22 / 480 * 100}vw, 64px);
    line-height: 110%;
  }
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
  z-index: 0;


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

    @media (max-width: 992px) {
      height: 15vh;
    }
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

    @media (max-width: 992px) {
      height: 15vh;
    }
  }
`;

export const StyledCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .active p{
    font-weight: 700;
  }

  p{
    font-variant-numeric: normal;
  }

  a{
    text-decoration: none;
    min-width: fit-content;

    &:focus-visible{
      outline-width: 1px;
      outline-style: solid;
      outline-color: var(--normalGreen);
      outline-offset: -1px;
    }
  }
`;
