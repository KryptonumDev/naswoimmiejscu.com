import styled from "styled-components";

export const StyledContainer = styled.section`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 128px;
  overflow-y: ${({ hidey }) => (hidey ? "hidden" : "visible")};

  @media only screen and (max-width: 1167px) {
    padding: 0 33px;

    &.home-about-me {
      padding: 0 33px 0 0;
    }
  }

  @media only screen and (max-width: 992px) {
    &.footer {
      padding: 0 0 0 33px;
    }

    &.about-me-second-section {
      padding: 0;
    }
  }
`;
