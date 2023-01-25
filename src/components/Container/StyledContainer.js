import styled from "styled-components";

export const StyledContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 1764px;
  padding: 0 32px;
  overflow-y: ${({ hidey }) => (hidey ? "hidden" : "visible")};

  @media only screen and (max-width: 1167px) {
    &.home-about-me {
      padding: 0 32px 0 0;
    }
  }

  @media only screen and (max-width: 992px) {
    &.footer {
      padding: 0 0 0 32px;
    }

    &.about-me-second-section {
      padding: 0;
    }
  }

  @media only screen and (max-width: 992px) {
    padding: 0 20px;
  }
`;
