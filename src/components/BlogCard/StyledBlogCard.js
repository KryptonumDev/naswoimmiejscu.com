import styled from "styled-components";
import { Link } from "gatsby";

export const StyledBlogCard = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: clamp(14px, 5.26vw, 101px);
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: var(--normalBlack);

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledImageWrapper = styled.div`
  width: 35%;
  max-width: 436px;
  height: 390px;
  position: relative;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledTextWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledTitleWrapper = styled.div`
  font: 700 clamp(20px, 2.5vw, 48px) Roboto;
  margin-bottom: 20px;
`;

export const StyledDescWrapper = styled.div`
  max-width: 400px;
  font: 400 clamp(11px, 0.833vw, 16px) Roboto;
  margin-bottom: 4px;
`;

export const StyledMobileCategory = styled.div`
  display: none;
  position: absolute;
  top: 19px;
  right: 14px;
  z-index: 1;
  background-color: var(--normalGreen);
  padding: 11px 20px;
  border-radius: 45px;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
