import styled from "styled-components";

export const StyledHomeAboutMe = styled.div`
  display: flex;
  margin-top: 155px;
  justify-content: space-between;
  padding-left: 55px;
  gap: 40px;

  @media only screen and (max-width: 1167px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    gap: 14px;
    margin-top: 32px;
  }
`;

export const StyledRightWrapper = styled.div`
  max-width: 880px;
  width: 55%;

  @media only screen and (max-width: 1167px) {
    padding-left: 33px;
    width: 100%;
    max-width: unset;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 45%;
  max-width: 606px;
  position: relative;

  @media only screen and (max-width: 1167px) {
    width: 65%;
    max-width: unset;
  }
`;

export const StyledTopCircle = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  z-index: 1;

  @media only screen and (max-width: 1167px) {
    display: none;
  }
`;

export const StyledBottomCircle = styled.div`
  position: absolute;
  bottom: -50px;
  right: -50px;
  z-index: 1;

  @media only screen and (max-width: 1225px) {
    bottom: -21px;
    right: -21px;
  }
`;
