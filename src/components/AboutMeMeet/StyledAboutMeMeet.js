import styled from "styled-components";
import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";

export const StyledAboutMeMeet = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 184px;
  align-items: center;
  gap: 40px;
`;

export const StyledImageWrapper = styled.div`
  max-width: 606px;
  width: 50%;
  position: relative;
`;

export const StyledContentWrapper = styled.div`
  width: 50%;
  max-width: 805px;
`;

export const StyledTopCircle = styled.div`
  position: absolute;
  z-index: 1;
  top: -45px;
  left: -45px;
`;

export const StyledBottomCircle = styled.div`
  position: absolute;
  z-index: 1;
  bottom: -45px;
  right: -45px;
`;

export const StyledDescWrapperElement = styled(StyledDescWrapper)`
  em {
    font-size: 16px;
    font-style: normal;
  }
`;

export const StyledTitleWrapperElement = styled(StyledTitleWrapper)`
  margin-top: 0;
`;
