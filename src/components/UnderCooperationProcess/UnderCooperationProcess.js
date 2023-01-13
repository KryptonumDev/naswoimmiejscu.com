import React from "react";
import parse from "html-react-parser";

import Button from "../Button/Button";

import {
  StyledUnderCooperationProcess,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledTextWrapper,
  StyledContent,
  StyledAnimationWrapper,
  StyledLine,
} from "./StyledUnderCooperationProcess";

const UnderCooperationProcess = ({ data }) => {
  return (
    <StyledUnderCooperationProcess>
      <StyledAnimationWrapper>
        <StyledLine />
      </StyledAnimationWrapper>
      <StyledContent>
        <StyledLeftWrapper>
          <StyledTextWrapper>
            {data.tekstPoLewo ? parse(data.tekstPoLewo) : null}
          </StyledTextWrapper>
          <Button
            btnData={data.przyciskPoLewo}
            variant="green"
            haswidth="355px"
            hasheight="88px"
            hasfontsize="20px"
          />
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledTextWrapper>
            {data.tekstPoPrawo ? parse(data.tekstPoPrawo) : null}
          </StyledTextWrapper>
        </StyledRightWrapper>
      </StyledContent>
    </StyledUnderCooperationProcess>
  );
};

export default UnderCooperationProcess;
