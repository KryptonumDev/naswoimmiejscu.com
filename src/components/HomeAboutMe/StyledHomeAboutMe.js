import styled from "styled-components";

export const StyledHomeAboutMe = styled.div`
  display: flex;
  margin-top: 155px;
  justify-content: space-between;
  padding-left: 55px;
`;

export const StyledRightWrapper = styled.div`
  max-width: 880px;
  width: 55%;
`;

export const StyledLeftWrapper = styled.div`
  width: 45%;
  max-width: 606px;
  position: relative;
`;

export const StyledTopCircle = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  z-index: 1;
`;

export const StyledBottomCircle = styled.div`
  position: absolute;
  bottom: -50px;
  right: -50px;
  z-index: 1;
`;
