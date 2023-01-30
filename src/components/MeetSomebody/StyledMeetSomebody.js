import styled from "styled-components";

export const StyledMeetSomebody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: space-between;
  transition: background-color 250ms;

  .icon {
    transition: transform 250ms linear;
  }

  &:hover {
    .icon {
      transform: translateX(20px);
    }
  }

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--hoverGreen);
    outline-offset: 4px;
  }

  @media only screen and (max-width: 992px) {
    max-width: 50%;
    margin-bottom: 36px;
  }

  @media only screen and (max-width: 803px) {
    max-width: 82%;
  }

  @media only screen and (max-width: 506px) {
    max-width: 100%;
    padding-right: 77px;
  }
`;

export const StyledIcon = styled.div`
  margin-right: 24px;

  @media only screen and (max-width: 992px) {
    
    img {
      width: 38px;
      height: 38px;
    }
  }
`;

export const StyledTitle = styled.div`
  width: calc(100% - 241px - 106px);

  @media only screen and (max-width: 992px) {
    width: calc(100% - 150px - 66px);
    font-size: 20px;
    line-height: 1.33em;
  }

  @media only screen and (max-width: 347px) {
    width: calc(100% - 100px - 66px);
  }
`;

export const StyledAvatarWrapper = styled.div`
  width: clamp(120px, 9.948vw, 191px);
  height: clamp(120px, 9.948vw, 191px);
  border-radius: 50%;
  overflow: hidden;
  margin-left: 20px;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 540px) {
    width: 58px;
    height: 58px;
  }
`;
