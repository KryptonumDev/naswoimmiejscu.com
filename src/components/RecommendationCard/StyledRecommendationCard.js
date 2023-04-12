import styled from "styled-components";

export const StyledRecommendationCard = styled.div`
  width: 100%;
  padding: 28px clamp(30px, 3.958vw, 76px);
  text-decoration: none !important;
  color: var(--normalBlack);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  background-color: ${({ hasdeclaredbg }) =>
    hasdeclaredbg ? null : "var(--recomendationSecond)"};
  flex: 1;

  > div {
    &:first-child {
      > div {
        &:first-child {
          .avatar-circle {
            transition: transform 250ms linear;
          }
        }
      }
    }
  }

  &:hover {
    > div {
      &:first-child {
        > div {
          &:first-child {
            .avatar-circle {
              transform: scale(1.15);
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 24px 0 24px 0;
    margin-top: 24px;
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
  font: 700 18px/1.33em Roboto;
`;

export const StyledDescriptionWrapper = styled.div`
  font: 300 15px/1.33em Roboto;
  margin-top: 4px;

  @media only screen and (max-width: 1024px) {
    text-align: ${({ recdiff }) => (recdiff ? "left" : "center")};
    font-style: ${({ recdiff }) => (recdiff ? "normal" : "italic")};
    color: var(--normalBlack);
    position: relative;
    font-weight: ${({ recdiff }) => (recdiff ? "300" : "700")};
    font-size: 26px;
    padding-bottom: 12px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 360px) {
    font-size: 15px;
  }
`;

export const StyledDescImageWrapper = styled.div`
  font: 300 14px/1.33em Roboto;
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
