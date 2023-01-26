import styled from "styled-components";

export const StyledEffectWomens = styled.div`
  gap: ${({ iswomens }) =>
    iswomens ? "clamp(20px, 1.3vw, 29px)" : "clamp(80px, 5.469vw, 105px)"};
  width: 100%;
  display: flex;
  margin-top: 10.417vw;
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
  padding-left: 100px;

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
    display: flex;
    flex-direction: column;
    gap 14px;
    color: var(--lightGreen);
    list-style-type: disc;

    li {
        color: var(--lightGreen);
        font: 300 1.354vw Roboto;
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
        }
    
        @media only screen and (max-width: 360px) {
            font-size: 3.333vw;
        }
    }
`;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  left: -50px;
  top: -50px;
  z-index: 1;

  @media only screen and (max-width: 992px) {
    left: -33px;
    top: -23px;

    div {
      background-color: var(--buttonBrownHover);
      width: 66px;
      height: 66px;
    }
  }
`;

export const StyledElements = styled.div`
  width: 100%;
  gap: 32px;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  > div {
    display: flex;
    align-items: center;
    padding: 16px 24px;
    gap: 16px;
    background-color: var(--womensBox);
    border-radius: 8px;

    &:last-child {
      background-color: var(--normalGreen);
      max-width: 507px;
      align-items: flex-start;

      p {
        font-size: clamp(20px, 1.242vw, 26px);
      }
    }

    .gatsby-image-wrapper {
      display: block;
      min-width: 27px;
      height: 27px;
    }

    p {
      font: 300 clamp(16px, 1.042vw, 20px) Roboto;

      strong {
        font-weight: 600;
      }
    }
  }
`;
