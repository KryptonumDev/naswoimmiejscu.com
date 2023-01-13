import styled from "styled-components";
import Image from "../Image/Image";
import { StyledCircle } from "../Circle/StyledCircle";

export const StyledHomeHeroSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 126px;
  padding-left: 55px;
`;

export const StyledLeftWrapper = styled.div`
  position: relative;
  width: 40%;
`;

export const StyledRightWrapper = styled.div`
  max-width: 806px;
  width: 60%;
`;

export const StyledTitleWrapper = styled.div`
  font: 700 64px Roboto;
  margin-top: 66px;

  strong {
    color: var(--nromalBrown);
    font-weight: 700;
  }
`;

export const StyledDescWrapper = styled.div`
  margin: 32px 0 66px;
  font: 300 26px Roboto;
  color: var(--normalBlack);

  strong {
    font-weight: 500;
  }
`;

export const StyledImage = styled(Image)``;

export const StyledCircleWrapper = styled(StyledCircle)`
  position: absolute;
  top: -50px;
  left: -50px;
  z-index: 1;
`;
