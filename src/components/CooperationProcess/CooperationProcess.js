import React from "react";
import parse from "html-react-parser";

import Image from "../Image/Image";
import SmallGreenCircle from "../SmallGreenCircle/SmallGreenCircle";

import {
  StyledCooperationProcess,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledGreenCircle,
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
      <StyledGreenCircle>
        <SmallGreenCircle />
      </StyledGreenCircle>
    </StyledCooperationProcess>
  );
};

export default CooperationProcess;
