import React from "react";

import Image from "../Image/Image";

import {
  StyledMeetSomebody,
  StyledIcon,
  StyledTitle,
  StyledAvatarWrapper,
  iconImage,
} from "./StyledMeetSomebody";
import { StyledText } from "../Text/StyledText";

const MeetSomebody = ({ data, icon, tekstDoLinku }) => {
  return (
    <StyledMeetSomebody to={`/case/${data[0].slug}`}>
      {icon ? (
        <StyledIcon className="icon">
          <Image imageDesktop={icon} />
        </StyledIcon>
      ) : null}
      <StyledTitle>
        <StyledText
          hasdeclaredfontsize="clamp(20px, 3.333vw, 64px)"
          hasdeclaredfontweight="700"
          hasdeclaredfontcolor="var(--normalBlack)"
        >
          {tekstDoLinku}
        </StyledText>
      </StyledTitle>
      {data[0].caseStudyArtykul.miniaturkaCaseStudy.avatar ? (
        <StyledAvatarWrapper>
          <Image
            imageDesktop={data[0].caseStudyArtykul.miniaturkaCaseStudy.avatar}
          />
        </StyledAvatarWrapper>
      ) : null}
    </StyledMeetSomebody>
  );
};

export default MeetSomebody;
