import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
`;

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
