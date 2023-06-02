import styled from "styled-components";

export const StyledBlogHomeCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 29px;
  text-decoration: none;
  color: var(--normalBlack);
  cursor: pointer;
  align-items: center;

  img {
    transition: transform 0.4s ease-out;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--normalGreen);
    outline-offset: 4px;
  }

  @media only screen and (max-width: 1167px) {
    padding-left: 20px;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 8px;
    width: auto;
    margin-right: 10px;
    padding-left: 0;
    justify-content: flex-end;
  }

  @media only screen and (max-width: 355px) {
    width: 250px;
  }
`;

export const StyledTextWrapper = styled.div`
  width: 45%;
  text-align: right;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    text-align: left;
  }
`;

export const StyledImageWrapper = styled.div`
  width: 55%;
  max-width: 419px;
  max-height: 220px;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    max-width: 419px;
    max-height: 220px;

    img {
      transition: transform 0.4s ease-out;
    }
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }
`;

export const StyledTitle = styled.div`
  font: 700 clamp(18px, 1.25vw, 24px) / 1.33em Roboto;

  @media only screen and (max-width: 432px) {
    font-size: 5.556vw;
  }
`;

export const StyledDesc = styled.div`
  font: 300 13px Roboto;
  margin-top: 10px;

  @media only screen and (max-width: 432px) {
    font-size: 14px;
  }
`;

export const StyledDate = styled.div`
  font-size: 13px;
  line-height: 1.33em;

  @media only screen and (max-width: 1024px) {
    p {
      text-align: left;
    }
  }

  @media only screen and (max-width: 432px) {
    p {
      font-size: 13px;
    }
  }
`;
