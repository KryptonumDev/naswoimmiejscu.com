import React from "react";

import Image from "../Image/Image";

import {
  StyledMeetSomebody,
  StyledIcon,
  StyledTitle,
  StyledAvatarWrapper,
} from "./StyledMeetSomebody";
import { StyledText } from "../Text/StyledText";

import { Link } from "../TransitionLink/TransitionLink";

const MeetSomebody = ({ data, icon, tekstDoLinku }) => {
  return (
    <Link className="transitionLink" to={`/sukcesy/${data[0].slug}`}>
      <StyledMeetSomebody>
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
    </Link>
  );
};

export default MeetSomebody;
