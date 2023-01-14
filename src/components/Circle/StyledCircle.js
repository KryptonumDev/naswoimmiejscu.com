import styled from "styled-components";

export const StyledCircle = styled.div`
  width: ${({ hasdeclaredwidth }) =>
    hasdeclaredwidth ? hasdeclaredwidth : "99px"};
  height: ${({ hasdeclaredheight }) =>
    hasdeclaredheight ? hasdeclaredheight : "99px"};
  border-radius: 50%;
  background-color: ${({ hasdeclaredbg }) =>
    hasdeclaredbg ? hasdeclaredbg : "var(--buttonBrownHover)"};

  @media only screen and (max-width: 1225px) {
    &.home-about-me {
      width: 42px;
      height: 42px;
    }
  }

  @media only screen and (max-width: 1167px) {
    &.home-hero-section {
      width: 30px;
      height: 31px;
    }
  }
`;
