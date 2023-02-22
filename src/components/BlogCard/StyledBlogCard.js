import styled from 'styled-components'

export const StyledBlogCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: clamp(14px, 5.26vw, 101px);
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: var(--normalBlack);

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: var(--normalGreen);
    outline-offset: -1px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 436px;
    margin: 0 auto;
    gap: 14px;
  }

  .image img {
    transition: transform 0.4s ease-out;
  }

  &:hover {
    .image {
      img {
        transform: scale(1.05);
      }
    }

    .link {
      background-color: var(--hoverGreen);
      border: 1px solid transparent;
    }
  }
`

export const StyledImageWrapper = styled.div`
  width: 35%;
  min-width: 400px;
  position: relative;

  @media (max-width: 1024px) {
    min-width: 350px;
  }

  @media (max-width: 480px) {
    min-width: unset;
  }

  .gatsby-image-wrapper {
    max-width: 436px;
    width: 100%;
    aspect-ratio: 1.11794871795/1;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

export const StyledTextWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 100%;

    > p {
      &:first-child {
        display: none;
      }
    }
  }

  @media (max-width: 360px) {
    .link {
      width: 100%;
      font-size: 11px;
      min-height: 53px;
    }
  }
`

export const StyledTitleWrapper = styled.div`
  font: 700 clamp(20px, 2.5vw, 48px) Roboto;
  margin-bottom: 20px;
`

export const StyledDescWrapper = styled.div`
  max-width: 304px;
  font: 300 clamp(14px, ${(14 / 480) * 100}vw, 16px) / 1.33em Roboto;
  margin-bottom: 30px;
`

export const StyledMobileCategory = styled.div`
  display: none;
  position: absolute;
  top: 19px;
  right: 14px;
  z-index: 1;
  background-color: var(--normalGreen);
  padding: 11px 20px;
  border-radius: 45px;

  @media only screen and (max-width: 768px) {
    display: block;
    top: unset;
    bottom: 19px;
    left: 14px;
    right: unset;
  }
`
