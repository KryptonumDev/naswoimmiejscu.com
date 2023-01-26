import React from "react";
import { StyledCircle } from "../Circle/StyledCircle";
import parse from "html-react-parser";

import Image from "../Image/Image";

import {
  StyledRecommendationCard,
  StyledAvatarWrapper,
  StyledDescriptionWrapper,
  StyledImage,
  StyledTextContent,
  StyledNameWrapper,
  StyledDescImageWrapper,
  StyledMobileIcon,
} from "./StyledRecommendationCard";

const RecommendationCard = ({
  slug,
  avatar,
  name,
  nameDesc,
  desc,
  isDiffBg,
  recDif,
}) => {
  return (
    <StyledRecommendationCard
      to={`/case/${slug}`}
      hasdeclaredbg={isDiffBg ? "true" : null}
    >
      <StyledAvatarWrapper recdiff={recDif}>
        <StyledImage>
          <Image imageDesktop={avatar} />
          <StyledCircle
            hasdeclaredwidth="27px"
            hasdeclaredheight="27px"
            hasdeclaredbg="var(--lightGreen)"
            className="avatar-circle"
          />
        </StyledImage>
        <StyledTextContent>
          <StyledNameWrapper>{name ? parse(name) : null}</StyledNameWrapper>
          <StyledDescImageWrapper>
            {nameDesc ? parse(nameDesc) : null}
          </StyledDescImageWrapper>
        </StyledTextContent>
      </StyledAvatarWrapper>
      <StyledDescriptionWrapper recdiff={recDif}>
        {desc ? parse(desc) : null}
      </StyledDescriptionWrapper>
    </StyledRecommendationCard>
  );
};

export default RecommendationCard;
