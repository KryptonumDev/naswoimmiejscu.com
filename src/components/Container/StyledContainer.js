/** @format */

import styled from "styled-components";

export const StyledContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 1920px;
  padding: 0 clamp(32px, 6.667vw, 128px);
  overflow-y: ${({ hidey }) => (hidey ? "hidden" : "visible")};
  position: relative;

  &.error {
    overflow: hidden;
  }

  &.footer {
    padding: 0;
  }

  @media only screen and (max-width: 1472px) {
    padding: 0 clamp(22px, 3vw, 60px);
  }

  @media only screen and (max-width: 1167px) {
    &.home-about-me {
      padding: 0 22px 0 0;
    }
  }

  @media only screen and (max-width: 992px) {
    &.about-me-second-section {
      padding: 0;
    }

    padding: 0 22px;

    &.footer {
      padding: 0;
    }
  }
`;
