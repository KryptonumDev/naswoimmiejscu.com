import styled from "styled-components";
import { Link } from "gatsby";

export const StyledLink = styled(Link)`
  background-color: ${({ variant }) =>
    variant === "green" ? "var(--normalGreen)" : "var(--normalWhite)"};
  border: none;
  width: ${({ hasdeclaredwidth }) =>
    hasdeclaredwidth ? hasdeclaredwidth : "355px"};
  border-radius: 64px;
  min-height: ${({ hasdeclaredheight }) =>
    hasdeclaredheight ? hasdeclaredheight : "88px"};
  transition: background-color 250ms;
  cursor: pointer;
  text-transform: uppercase;
  font: 700 ${({ hasfontsize }) => (hasfontsize ? hasfontsize : "20px")} Roboto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ variant }) =>
    variant === "green" ? "var(--normalBlack)" : "var(--normalWhite)"};

  &:hover {
    background-color: ${({ variant }) =>
      variant === "green" ? "var(--hoverGreen)" : "var(--buttonBrownHover)"};
  }

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: ${({ variant }) =>
      variant === "green" ? "var(--hoverGreen)" : "var(--buttonBrownHover)"};
    outline-offset: 4px;
  }
`;

export const StyledButton = styled.button`
  background-color: ${({ variant }) =>
    variant === "green" ? "var(--normalGreen)" : "var(--normalWhite)"};
  color: ${({ variant }) =>
    variant === "green" ? "var(--normalBlack)" : "var(--normalWhite)"};
  border: none;
  width: ${({ hasdeclaredwidth }) =>
    hasdeclaredwidth ? hasdeclaredwidth : "355px"};
  border-radius: 64px;
  min-height: ${({ hasdeclaredheight }) =>
    hasdeclaredheight ? hasdeclaredheight : "88px"};
  transition: background-color 250ms;
  cursor: pointer;
  text-transform: uppercase;
  font: 700 ${({ hasfontsize }) => (hasfontsize ? hasfontsize : "20px")} Roboto;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "green" ? "var(--hoverGreen)" : "var(--buttonBrownHover)"};
  }

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: ${({ variant }) =>
      variant === "green" ? "var(--hoverGreen)" : "var(--buttonBrownHover)"};
    outline-offset: 4px;
  }

  &:disabled {
    background-color: ${({ variant }) =>
      variant === "green"
        ? "var(--disabledGreen)"
        : "var(--buttonWhiteNormal)"};
    color: ${({ variant }) =>
      variant === "green" ? "var(--normalWhite)" : "var(--disabledGreen)"};
    border: ${({ variant }) =>
      variant === "green"
        ? "1px solid var(--normalWhite)"
        : "1px solid var(--disabledGreen)"};
  }
`;
