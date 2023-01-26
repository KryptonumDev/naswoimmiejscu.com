import styled from "styled-components";

export const StyledCustomButton = styled.button`
  width: ${({ hasdeclaredwidth }) =>
    hasdeclaredwidth ? hasdeclaredwidth : "131px"};
  height: ${({ hasdeclaredheight }) =>
    hasdeclaredheight ? hasdeclaredheight : "131px"};
  border-radius: 50% 50% 50% 0;
  background-color: ${({ bgcolor }) =>
    bgcolor ? bgcolor : "var(--buttonBrownHover)"};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 250ms;
  transform: scale(
    ${({ hastransform, isfaq }) =>
      !isfaq ? (hastransform ? null : "0.6") : null}
  );

  img {
    width: ${({ imagesize }) => (imagesize ? imagesize : "initial")};
    height: ${({ imagesize }) => (imagesize ? imagesize : "initial")};
  }

  .gatsby-image-wrapper {
    width: ${({ imagesize }) => (imagesize ? imagesize : "initial")};
    height: ${({ imagesize }) => (imagesize ? imagesize : "initial")};
  }

  svg {
    color: ${({ iconColor }) => (iconColor ? iconColor : "var(--normalWhite)")};
  }
`;
