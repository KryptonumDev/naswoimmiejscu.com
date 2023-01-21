import React from "react";
import parse from "html-react-parser";

import Button from "../Button/Button";
import AnimateIcon from "../AnimateIcon/AnimateIcon";
import BiggerAnimate from "../BiggerAnimate/BiggerAnimate";

import {
  StyledUnderCooperationProcess,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledTextWrapper,
  StyledContent,
  StyledAnimationWrapper,
  StyledLine,
  StyledFirstIcon,
  StyledSecondIcon,
  StyledCircleWrapper,
} from "./StyledUnderCooperationProcess";
import { StyledCircle } from "../Circle/StyledCircle";

const UnderCooperationProcess = ({ data }) => {
  return (
    <StyledUnderCooperationProcess>
      <StyledAnimationWrapper>
        <StyledLine />
        <StyledFirstIcon ishide>
          <AnimateIcon />
        </StyledFirstIcon>
        <StyledSecondIcon ishide>
          <BiggerAnimate />
        </StyledSecondIcon>
      </StyledAnimationWrapper>
      <StyledContent>
        <StyledCircleWrapper>
          <StyledCircle hasdeclaredwidth="36px" hasdeclaredheight="36px" />
        </StyledCircleWrapper>
        <StyledLeftWrapper>
          <StyledTextWrapper>
            {data.tekstPoLewo ? parse(data.tekstPoLewo) : null}
          </StyledTextWrapper>
          <Button
            btnData={data.przyciskPoLewo}
            variant="green"
            haswidth="355px"
            hasheight="88px"
            hasClampHeight="4.583vw"
            hasfontsize="clamp(16px, 1.042vw, 20px)"
            hasClampWidth="18.490vw"
            hasBasicWidth="277px"
            hasBasicHeight="73px"
            className="under-cooperation-process"
          />
          <StyledFirstIcon>
            <AnimateIcon />
          </StyledFirstIcon>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledTextWrapper>
            {data.tekstPoPrawo ? parse(data.tekstPoPrawo) : null}
          </StyledTextWrapper>
          <StyledSecondIcon>
            <BiggerAnimate />
          </StyledSecondIcon>
        </StyledRightWrapper>
      </StyledContent>
    </StyledUnderCooperationProcess>
  );
};

export default UnderCooperationProcess;
