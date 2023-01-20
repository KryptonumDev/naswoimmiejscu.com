import styled from "styled-components";

export const StyledHomeSecondSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: clamp(62px, 5.208vw, 100px);
  padding-left: 55px;
  gap: clamp(100px, 8.698vw, 200px);

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
  max-heiht: 1080px;

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const StyledContent = styled.div`
  min-height: 450px;

  @media only screen and (max-width: 992px) {
    min-height: unset;
  }
`;

export const StyledContentWrapper = styled.div`
  font: 300 clamp(20px, 1.142px, 22px) Roboto;
  margin: 25px 0;

  strong {
    font-weight: 600;
  }

  @media only screen and (max-width: 1499px) {
    font-size: clamp(16, 1.201vw, 20);
  }

  @media only screen and (max-width: 992px) {
    font-size: 2.218vw;
  }

  @media only screen and (max-width: 808px) {
    font-size: 2.9vw;
  }

  @media only screen and (max-width: 528px) {
    font-size: 15px;
  }
`;

export const StyledIconsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 22px;
  }

  @media only screen and (max-width: 1349px) {
    flex-direction: column;
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
