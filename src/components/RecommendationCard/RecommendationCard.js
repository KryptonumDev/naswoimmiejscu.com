import React from "react";
import { StyledCircle } from "../Circle/StyledCircle";

import {
  StyledRecommendationCard,
  StyledAvatarWrapper,
  StyledCityWrapper,
  StyledDescriptionWrapper,
  StyledImage,
  StyledTextContent,
  StyledStarsWrapper,
  StyledNameWrapper,
} from "./StyledRecommendationCard";

const RecommendationCard = () => {
  return (
    <StyledRecommendationCard>
      <StyledAvatarWrapper>
        <StyledImage>
          tutaj bedzie zdjęcie
          <StyledCircle />
        </StyledImage>
        <StyledTextContent>
          <StyledStarsWrapper>gwiazdki</StyledStarsWrapper>
          <StyledNameWrapper>Imie</StyledNameWrapper>
          <StyledCityWrapper>
            <div>ikonka miasto</div>
            <div>ikonka wiek</div>
          </StyledCityWrapper>
        </StyledTextContent>
      </StyledAvatarWrapper>
      <StyledDescriptionWrapper>długi opis</StyledDescriptionWrapper>
    </StyledRecommendationCard>
  );
};

export default RecommendationCard;
