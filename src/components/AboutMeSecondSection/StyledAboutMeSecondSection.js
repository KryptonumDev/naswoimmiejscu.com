import styled from "styled-components";

export const StyledAboutMeSecondSection = styled.div`
  width: 100%;
  margin-top: 60px;
`;

export const StyledTitleWrapper = styled.div`
  text-align: center;
  font: 900 56px Roboto;
  text-transform: uppercase;
  color: var(--normalGreen);

  @media only screen and (max-width: 1763px) {
    font-size: 52px;
  }

  @media only screen and (max-width: 1499px) {
    font-size: 42px;
  }

  @media only screen and (max-width: 1349px) {
    font-size: 32px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 42px;
    text-align: left;
    padding: 0 33px;
  }

  @media only screen and (max-width: 528px) {
    font-size: 32px;
  }

  @media only screen and (max-width: 360px) {
    font-size: 20px;
  }
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 89px;
  gap: 40px;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    padding: 0 33px;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 59px;
  padding-left: 20px;
  flex: flex-shrink;

  div {
    font: 300 22px Roboto;
    max-width: 655px;

    @media only screen and (max-width: 1763px) {
      font-size: 22px;
    }

    @media only screen and (max-width: 1499px) {
      font-size: 20px;
    }

    @media only screen and (max-width: 1349px) {
      font-size: 18px;
    }

    @media only screen and (max-width: 992px) {
      font-size: 22px;
    }

    @media only screen and (max-width: 528px) {
      font-size: 18px;
    }

    @media only screen and (max-width: 360px) {
      font-size: 15px;
    }

    em {
      font-style: normal;
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 1800px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 0;
    gap: 20px;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledRightWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding-left: 20px;

  div {
    font: 300 22px Roboto;
    max-width: 655px;

    @media only screen and (max-width: 1763px) {
      font-size: 22px;
    }

    @media only screen and (max-width: 1499px) {
      font-size: 20px;
    }

    @media only screen and (max-width: 1349px) {
      font-size: 18px;
    }

    @media only screen and (max-width: 992px) {
      font-size: 22px;
    }

    @media only screen and (max-width: 528px) {
      font-size: 18px;
    }

    @media only screen and (max-width: 360px) {
      font-size: 15px;
    }

    em {
      font-style: normal;
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 1800px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 0;
    gap: 20px;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledImageWrapper = styled.div`
  margin-top: 60px;
  position: relative;

  @media only screen and (max-width: 992px) {
    height: 297px;

    .gatsby-image-wrapper {
      height: 100%;
    }
  }
`;

export const StyledCircleWrapper = styled.div`
  width: 982px;
  height: 982px;
  position: absolute;
  top: 160px;
  right: -500px;
  z-index: 2;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 1499px) {
    width: 328px;
    height: 328px;
    right: -100px;
    top: 200px;
  }

  @media only screen and (max-width: 777px) {
    top: 130px;
    right: -200px;
  }
`;
