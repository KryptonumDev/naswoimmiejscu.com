import styled from "styled-components";

export const StyledHomeSecondSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: clamp(62px, 5.208vw, 100px);
  padding-left: 55px;
  gap: clamp(65px, 9.375vw, 180px);

  @media only screen and (max-width: 1167px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    margin-top: 62px;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;
  max-width: 655px;

  @media only screen and (max-width: 992px) {
    width: 100%;
    max-width: unset;
  }
`;

export const StyledRightWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  max-height: 1080px;
  height: fit-content;
  margin: auto;
  .image{
    height: fit-content;
  }

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const StyledContent = styled.div`
  min-height: 500px;

  @media only screen and (max-width: 992px) {
    min-height: unset;
  }
`;

export const StyledContentWrapper = styled.div`
  font: 300 clamp(20px, 1.142px, 22px)/1.33em Roboto;
  margin: clamp(18px, 1.302vw, 25px) 0;

  strong {
    font-weight: 600;
  }

  @media only screen and (max-width: 1499px) {
    font-size: clamp(16px, 1.201vw, 20px);
  }

  @media only screen and (max-width: 992px) {
    font-size: 2.218vw;
    max-width: 655px;
  }

  @media only screen and (max-width: 808px) {
    font-size: 2.9vw;
  }

  @media only screen and (max-width: 528px) {
    font-size: 15px;
    margin-bottom: 47px
  }
`;

export const StyledIconsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 26px;

  > div {
    display: flex;
    align-items: center;
    gap: 22px;
    cursor: pointer;
    transition: 250ms opacity linear;

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: ${({ variant }) =>
        variant === "green" ? "var(--hoverGreen)" : "var(--buttonBrownHover)"};
      outline-offset: 4px;
    }

    button {
      transition: 250ms background-color linear;
    }

    p {
      transition: 250ms color linear;
    }

    &:hover  {
      .button{
        background-color: #0BC76D60;
        transform: scale(.65);
      }

      p{
        color: #00000040;
      }
    }

    .active{
      color: #000000 !important;
    }
  }

  @media only screen and (max-width: 1349px) {
    gap: 20px;

    > div {
      gap: 13px;
    }
  }

  @media only screen and (max-width: 992px) {
    gap: 26px;
    flex-direction: row;

    p {
      font-size: 32px;
    }
  }

  @media only screen and (max-width: 623px) {
    flex-direction: column;
    gap: 0;

    > div {
      &:last-child {
        transition: transform 400ms;
        transform: translateX(${({ iswomens }) => !iswomens ? "-18px" : "0"});
      }
    }
  }

  @media only screen and (max-width: 345px) {
    p {
      font-size: 24px;
    }
  }
`;

export const StyledMobileImage = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    margin-top: 14px;
    height: 61.492vw;

    img {
      width: 100%;
      height: 100%;
    }

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 360px) {
    height: 310px;
  }
`;
