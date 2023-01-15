import styled from "styled-components";
import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";

export const StyledAboutMeWhoIm = styled.div`
  margin-top: 177px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  position: relative;
  z-index: 1;
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;
  padding-left: 100px;
  position: relative;
`;

export const StyledRightWrapper = styled.div`
  max-width: 745px;

  em {
    font-size: 20px;
    font-style: normal;
  }
`;

export const StyledTitleWrapperElement = styled(StyledTitleWrapper)`
  margin-top: 33px;
  display: flex;
  gap: 20px;

  svg {
    padding-top: 10px;
  }
`;

export const StyledDescWrapperElement = styled(StyledDescWrapper)``;

export const StyledCircleWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
`;
