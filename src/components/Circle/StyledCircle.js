import styled from "styled-components";

export const StyledCircle = styled.div`
  width: ${({ hasdeclaredwidth }) =>
    hasdeclaredwidth ? hasdeclaredwidth : "99px"};
  height: ${({ hasdeclaredheight }) =>
    hasdeclaredheight ? hasdeclaredheight : "99px"};
  background-color: ${({ hasdeclaredbg }) =>
    hasdeclaredbg ? hasdeclaredbg : "var(--buttonBrownHover)"};
`;
