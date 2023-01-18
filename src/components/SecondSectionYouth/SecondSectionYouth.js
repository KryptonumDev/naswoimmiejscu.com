import React from "react";
import parse from "html-react-parser";

import {
  StyledSecondSectionYouth,
  StyledLeftWrapper,
  StyledRightWrapper,
} from "./StyledSecondSectionYouth";

const SecondSectionYouth = ({ data }) => {
  return (
    <StyledSecondSectionYouth>
      <StyledLeftWrapper>
        {data.tekstPoLewo ? parse(data.tekstPoLewo) : null}
      </StyledLeftWrapper>
      <StyledRightWrapper>
        {data.tekstPoPrawo ? parse(data.tekstPoPrawo) : null}
      </StyledRightWrapper>
    </StyledSecondSectionYouth>
  );
};

export default SecondSectionYouth;
