import styled from "styled-components";
import { StyledDescWrapper } from "../HomeHeroSection/StyledHomeHeroSection";

export const StyledHomeContact = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 90px auto 0;
  padding: 0 0 0 183px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const StyledLeftWrapper = styled.div`
  padding-left: 30px;
`;
export const StyledRightWrapper = styled.div``;
export const StyledImageWrapper = styled.div`
  transform: translateX(-30px);
`;

export const StyledDescWrapperEdit = styled(StyledDescWrapper)`
  max-width: 790px;
`;

export const StyledCircleWrapper = styled.div`
  width: 420px;
  height: 420px;
  position: absolute;
  bottom: 100px;
  left: -120px;
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
  }
`;
