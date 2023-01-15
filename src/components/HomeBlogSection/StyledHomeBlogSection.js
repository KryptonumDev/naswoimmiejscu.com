import styled from "styled-components";

export const StyledHomeBlogSection = styled.div`
  width: 100%;
  display: flex;
  padding-left: 185px;
  max-width: 1920px;
  margin: 0 auto;
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;
  border-right: 1px solid var(--hrColor);
  display: flex;
  flex-direction: column;
`;

export const StyledRightWrapper = styled.div``;

export const StyledTitleElement = styled.div`
  margin-top: 27px;
  font: 700 64px Roboto;
`;

export const StyledDescWrapper = styled.div`
  margin-top: 27px;
  font: 300 26px Roboto;
  text-align: ${({ isleft }) => (isleft ? "left" : "right")};
  max-width: 623px;

  strong {
    font-weight: 600;
  }
`;

export const StyledContent = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: ${({ isright }) => (isright ? "flex-end" : "flex-start")};
  align-self: ${({ isright }) => (isright ? "flex-end" : "flex-start")};
  padding: ${({ hasdeclaredpadding }) =>
    hasdeclaredpadding ? hasdeclaredpadding : "0"};
  opacity: ${({ isactive }) => (isactive ? "1" : "0.5")};
`;

export const StyledIconWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
  }
`;
