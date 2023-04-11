import styled from "styled-components";

export const StyledAboutMeSecondSection = styled.div`
  width: 100%;
  margin-top: 78px;
  position: relative;

  @media only screen and (max-width: 992px) {
    margin-top: 0;
  }
`;

export const StyledTitleWrapperSecond = styled.div`
  text-align: center;
  font: 900 56px/1.33em Roboto;
  text-transform: uppercase;
  color: var(--normalGreen);
  margin: clamp(40px, 6.198vw, 119px) 0 clamp(40px, 3.021vw, 58px);

  @media only screen and (max-width: 1763px) {
    font-size: 2.95vw;
  }

  @media only screen and (max-width: 1499px) {
    font-size: 2.802vw;
  }

  @media only screen and (max-width: 1349px) {
    font-size: 3.372vw;
  }

  @media only screen and (max-width: 992px) {
    font-size: 4.234vw;
    text-align: left;
    padding: 0;
    margin-top: clamp(20px, 3.024vw, 30px);
  }

  @media only screen and (max-width: 528px) {
    font-size: 6.061vw;
  }

  @media only screen and (max-width: 420px) {
    font-size: clamp(15px, 5.556vw, 22px);
  }
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: clamp(40px, 3.698vw, 71px);
  gap: 40px;
  position: relative;

  @media only screen and (max-width: 1499px) {
    gap: clamp(100px, 8.698vw, 200px);
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    padding: 0 22px;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 59px;
  padding-left: 20px;

  div {
    font: 300 1.146vw/1.33em Roboto;
    max-width: 655px;

    &:nth-child(2) {
      width: 80%;
    }

    em {
      font-style: normal;
      font-size: 0.729vw;
    }

    @media only screen and (max-width: 1763px) {
      font-size: 1.248vw;
    }

    @media only screen and (max-width: 1499px) {
      font-size: 1.334vw;

      &:nth-child(2) {
        width: 100%;
      }
    }

    @media only screen and (max-width: 992px) {
      font-size: 2.218vw;
      max-width: unset;

      em {
        font-size: 2.218vw;
        margin-bottom: 8px;
        display: block;
      }
    }

    @media only screen and (max-width: 528px) {
      font-size: 3.409vw;

      em {
        font-size: 3.409vw;
      }
    }

    @media only screen and (max-width: 420px) {
      font-size: 4.167vw;

      em {
        font-size: 4.167vw;
      }
    }
  }

  @media only screen and (max-width: 1499px) {
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
    font: 300 1.146vw/1.33em Roboto;
    max-width: 655px;

    &:nth-child(2) {
      width: 80%;
    }

    em {
      font-style: normal;
      font-size: 0.729vw;
    }

    @media only screen and (max-width: 1763px) {
      font-size: 1.248vw;
    }

    @media only screen and (max-width: 1499px) {
      font-size: 1.334vw;

      &:nth-child(2) {
        width: 100%;
      }
    }

    @media only screen and (max-width: 992px) {
      font-size: 2.218vw;
      max-width: unset;

      em {
        font-size: 2.218vw;
        margin-bottom: 8px;
        display: block;
      }
    }

    @media only screen and (max-width: 528px) {
      font-size: 3.409vw;

      em {
        font-size: 3.409vw;
      }
    }

    @media only screen and (max-width: 420px) {
      font-size: 4.167vw;

      em {
        font-size: 4.167vw;
      }
    }
  }

  @media only screen and (max-width: 1499px) {
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
  margin-top: clamp(30px, 2.865vw, 55px);
  position: relative;

  .gatsby-image-wrapper {
    width: 100%;
  }

  @media only screen and (max-width: 992px) {
    height: 297px;

    .gatsby-image-wrapper {
      height: 100%;
    }
  }
`;

export const StyledCircleWrapper = styled.div`
  width: 51.146vw;
  height: 51.146vw;
  position: absolute;
  top: 6.533vw;
  right: -32.042vw;
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 666px) {
    top: 20vw;
  }

  @media only screen and (max-width: 505px) {
    top: 32vw;
  }

  @media only screen and (max-width: 441px) {
    top: 45vw;
  }

  @media only screen and (max-width: 420px) {
    width: 85.146vw;
    height: 85.146vw;
    top: 42vw;
    right: -55.042vw;
  }
`;

export const StyledMobileCircle = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    width: 46.875vw;
    height: 46.875vw;
    position: absolute;
    left: -22.177vw;
    top: -40px;
    z-index: -1;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 420px) {
    width: 129.167vw;
    height: 129.167vw;
    left: -62.177vw;
    top: -30px;
  }
`;
