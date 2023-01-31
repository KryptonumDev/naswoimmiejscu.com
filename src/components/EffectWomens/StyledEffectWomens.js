import styled from "styled-components";

export const StyledEffectWomens = styled.div`
  gap: ${({ iswomens }) =>
    iswomens ? "clamp(20px, 1.3vw, 29px)" : "clamp(80px, 5.469vw, 105px)"};
  width: 100%;
  display: flex;
  margin-top: ${({ iswomens }) =>
    iswomens
      ? "clamp(160px, 15.625vw, 300px)"
      : "clamp(160px, 10.417vw, 229px)"};
  justify-content: space-between;
  position: relative;
  z-index: 1;

  @media only screen and (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 0;
    margin-top: 44px;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 57%;
  padding-left: clamp(40px, 5.208vw, 100px);

  @media only screen and (max-width: 1455px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const StyledRightWrapper = styled.div`
  width: 43%;
  position: relative;
  max-width: 642px;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }

  @media only screen and (max-width: 360px) {
    .gatsby-image-wrapper {
      height: 248px;
    }
  }
`;

export const StyledList = styled.ul`
    display: ${({ ishide, iswomens }) =>
      ishide && iswomens ? "none" : "flex"};
    flex-direction: column;
    gap 14px;
    color: var(--lightGreen);
    list-style-type: disc;

    li {
        color: var(--lightGreen);
        font: 300 1.354vw/1.33em Roboto;
        position: relative;
        margin-left: 25px;

        .gatsby-image-wrapper {
            position: absolute;
            top: 3px;
            left: 0;
        }

        strong {
            font-weight: 600;
        }

        p {
            color: var(--normalBlack);
            margin-left: 52px;
        }

        @media only screen and (min-width: 1920px) {
          font-size: 26px;
        }

        @media only screen and (max-width: 1763px) {
            font-size: 1.248vw;
        }
    
        @media only screen and (max-width: 1499px) {
            font-size: 1.334vw;
        }
    
        @media only screen and (max-width: 1349px) {
            font-size: 1.334vw;
        }
    
        @media only screen and (max-width: 992px) {
            font-size: 2.218vw;
            margin-left: 18px;
            margin-bottom: 2px;

            .gatsby-image-wrapper{
              max-width: 22px;
              top: -2px;
            }
        }
    
        @media only screen and (max-width: 528px) {
            font-size: 3.409vw;

            p {
              margin-left: 40px;
            }
        }
    
        @media only screen and (max-width: 420px) {
            font-size: 3.333vw;
        }
    }

    @media only screen and (max-width: 992px){
      display: ${({ ishide, iswomens }) =>
        ishide ? "flex" : iswomens ? "none" : "flex"};
    }
`;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  left: -50px;
  top: -50px;
  z-index: 1;

  @media only screen and (max-width: 992px) {
    left: -22px;
    top: -23px;

    div {
      background-color: ${({ iswomens }) =>
        iswomens ? "var(--paginationNormal)" : "var(--buttonBrownHover)"};
      width: 66px;
      height: 66px;
    }
  }
`;

export const StyledElements = styled.ul`
  width: 100%;
  gap: clamp(16px, 1.667vw, 32px);
  margin-top: clamp(16px, 1.667vw, 32px);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  > li {
    display: flex;
    align-items: center;
    padding: clamp(8px, 0.833vw, 16px) clamp(16px, 1.25vw, 24px);
    gap: clamp(8px, 0.833vw, 16px);
    background-color: var(--womensBox);
    border-radius: 8px;
    line-height: 1.33em;

    > div {
      width: 27px;
      height: 28px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &:last-child {
      background-color: var(--normalGreen);
      max-width: 507px;
      align-items: flex-start;

      p {
        font-size: clamp(20px, 1.242vw, 26px);
      }
    }

    p {
      font: 300 clamp(16px, 1.042vw, 20px)/1.33em Roboto;
      width: calc(100% - 40px);

      strong {
        font-weight: 600;
      }
    }
  }

  @media only screen and (max-width: 1208px) {
    > li {
      p {
        font-size: 15px;
      }

      &:last-child {
        p {
          font-size: 15px;
        }
      }
    }
  }

  @media only screen and (max-width: 1128px) {
    gap: 8px;
  }
`;

export const StyledWhiteMobileCircle = styled.div`
  display: none;

  @media only screen and (max-width: 992px) {
    display: block;
    position: absolute;
    left: -32.258vw;
    bottom: 10vw;
    z-index: -1;
  }

  @media only screen and (max-width: 568px) {
    left: -60vw;
    top: 160vw;
  }

  @media only screen and (max-width: 404px) {
    left: -78vw;
  }

  @media only screen and (max-width: 360px) {
    top: 110vw;
  }
`;
