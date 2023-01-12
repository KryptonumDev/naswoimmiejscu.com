import styled from "styled-components"

export const StyledNav = styled.nav`
  display: flex;
  gap: 21px;

  a {
    font: 400 14px Roboto;
    text-transform: uppercase;
    color: var(--normalGrey);
    text-decoration: none;

    &.activeLink {
      color: var(--normalBlack);
      font-weight: 700;
    }
  }
`;