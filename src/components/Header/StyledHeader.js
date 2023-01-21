import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 80px;

  @media only screen and (max-width: 1167px) {
    padding-top: 24px;
  }
`;

export const StyledLogoWrapperHeader = styled.div`
  @media only screen and (max-width: 1167px) {
    position: absolute;
    top: 29px;
    left: 24px;
    display: block;
  }
`;
