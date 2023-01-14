import React from "react";
import parse from "html-react-parser";

import Image from "../Image/Image";

import {
  StyledCooperationProcess,
  StyledLeftWrapper,
  StyledRightWrapper,
} from "./StyledCooperationProcess";
import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";

const CooperationProcess = ({ data }) => {
  return (
    <StyledCooperationProcess>
      <StyledLeftWrapper>
        <Image
          imageDesktop={data.zdjeciePoLewo}
          imageMobile={data.zdjeciePoLewoMobile}
        />
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <StyledTitleWrapper className="cooperation-process">
          {data.tytulPoPrawo ? parse(data.tytulPoPrawo) : null}
        </StyledTitleWrapper>
        <StyledDescWrapper className="cooperation-process">
          {data.opisPoPrawo ? parse(data.opisPoPrawo) : null}
        </StyledDescWrapper>
      </StyledRightWrapper>
    </StyledCooperationProcess>
  );
};

export default CooperationProcess;
