import styled from "styled-components";
import { Link } from "gatsby";

export const StyledRecommendationCard = styled(Link)`
  width: 100%;
  padding: clamp(20px, 2.708vw, 52px) clamp(100px, 9.688vw, 186px)
    clamp(20px, 2.708vw, 52px) clamp(120px, 10.521vw, 202px);
  text-decoration: none;
  color: var(--normalBlack);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  background-color: ${({ hasdeclaredbg }) =>
    hasdeclaredbg ? null : "var(--recomendationSecond)"};
  flex: 1;

  @media only screen and (max-width: 1024px) {
    padding: 64px 0 24px 0;
    background-color: transparent;
  }
`;

export const StyledAvatarWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;

  @media only screen and (max-width: 1024px) {
    display: ${({ recdiff }) => (recdiff ? "flex" : "none")};
  }
`;

export const StyledImage = styled.div`
  width: 91px;
  height: 91px;
  position: relative;
  overflow: hidden;

  .gatsby-image-wrapper {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`;

export const StyledTextContent = styled.div`
  width: calc(100% - 91px - 16px);
`;

export const StyledNameWrapper = styled.div`
  font: 700 18px/1.2em Roboto;
`;

export const StyledDescriptionWrapper = styled.div`
  font: 300 15px/1.2em Roboto;
  margin-top: 4px;

  @media only screen and (max-width: 1024px) {
    text-align: ${({ recdiff }) => (recdiff ? "left" : "center")};
    font-style: ${({ recdiff }) => (recdiff ? "normal" : "italic")};
    color: var(--normalBlack);
    position: relative;
    font-weight: ${({ recdiff }) => (recdiff ? "300" : "700")};
  }
`;

export const StyledDescImageWrapper = styled.div`
  font: 300 14px/1.2em Roboto;
  color: var(--normalGrey);
`;

export const StyledMobileIcon = styled.div`
  display: none;

  @media only screen and (max-width: 1024px) {
    display: ${({ recdif }) => (recdif ? "none" : "block")};
    position: absolute;
    top: 35px;
    left: -10px;
    z-index: 1;
  }
`;
