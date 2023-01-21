import styled from "styled-components";
import Image from "../Image/Image";
import { Link } from "gatsby";

export const StyledLogo = styled(Link)`
  max-width: ${({ hasmaxwidth }) => (hasmaxwidth ? hasmaxwidth : "unset")};
  margin: ${({ hasdeclaredmargin }) =>
    hasdeclaredmargin ? hasdeclaredmargin : "0"};
  display: block;

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--hoverGreen);
    outline-offset: 4px;
  }

  @media only screen and (max-width: 1748px) {
    max-width: ${({ isheader, hasmaxwidth }) =>
      isheader ? "400px" : hasmaxwidth};
  }

  @media only screen and (max-width: 1608px) {
    max-width: ${({ isheader, hasmaxwidth }) =>
      isheader ? "320px" : hasmaxwidth};
  }

  @media only screen and (max-width: 1350px) {
    max-width: ${({ isheader, hasmaxwidth }) =>
      isheader ? "220px" : hasmaxwidth};
  }

  @media only screen and (max-width: 1167px) {
    max-width: ${({ isheader, hasmaxwidth }) =>
      isheader ? "400px" : hasmaxwidth};
  }

  @media only screen and (max-width: 600px) {
    max-width: ${({ isheader, hasmaxwidth, isfooter }) =>
      isheader ? (isfooter ? "246px" : "169px") : hasmaxwidth};
  }
`;

export const StyledImage = styled(Image)``;
