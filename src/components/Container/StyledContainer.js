import styled from "styled-components";

export const StyledContainer = styled.section`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 128px;

  @media only screen and (max-width: 1167px) {
    padding: 0 33px;

    &.home-about-me {
      padding: 0 33px 0 0;
    }
  }
`;
