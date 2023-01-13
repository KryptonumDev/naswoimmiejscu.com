import React, { useState } from "react";
import parse from "html-react-parser";

import CustomButton from "../CustomButton/CustomButton";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Image from "../Image/Image";

import {
  StyledDescWrapper,
  StyledTitleWrapper,
} from "../HomeHeroSection/StyledHomeHeroSection";
import {
  StyledHomeSecondSection,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledContent,
  StyledContentWrapper,
  StyledIconsWrapper,
} from "./StyledHomeSecondSection";
import { StyledText } from "../Text/StyledText";

const HomeSecondSection = ({ data }) => {
  const [isWomens, setIsWomens] = useState(false);

  return (
    <Container>
      <StyledHomeSecondSection>
        <StyledLeftWrapper>
          <StyledTitleWrapper>
            {data.tytulPoLewo ? parse(data.tytulPoLewo) : null}
          </StyledTitleWrapper>
          <StyledDescWrapper>
            {data.opisPoLewo ? parse(data.opisPoLewo) : null}
          </StyledDescWrapper>
          <StyledIconsWrapper>
            <div>
              <CustomButton
                onClick={() => setIsWomens(false)}
                type="button"
                image={data.ikonkaPoLewo}
                hasWidth={isWomens ? "92px" : null}
                hasHeight={isWomens ? "78px" : null}
                imageSize={isWomens ? "34px" : null}
                bgColor={isWomens ? "var(--btnGrey)" : null}
              />
              <StyledText
                hasdeclaredfontsize="32px"
                hasdeclaredfontweight="700"
                hasdeclaredfontcolor={
                  isWomens ? "var(--btnGrey)" : "var(--normalBlack)"
                }
              >
                {data.tekstDoIkonkiMlodziez}
              </StyledText>
            </div>
            <div>
              <CustomButton
                hasWidth={isWomens ? null : "92px"}
                hasHeight={isWomens ? null : "78px"}
                bgColor={isWomens ? null : "var(--btnGrey)"}
                image={data.ikonkaKobiety}
                onClick={() => setIsWomens(true)}
                type="button"
                imageSize={isWomens ? null : "34px"}
              />
              <StyledText
                hasdeclaredfontsize="32px"
                hasdeclaredfontweight="700"
                hasdeclaredfontcolor={
                  isWomens ? "var(--normalBlack)" : "var(--btnGrey)"
                }
              >
                {data.tekstKobiety}
              </StyledText>
            </div>
          </StyledIconsWrapper>
          {isWomens ? (
            <StyledContent>
              <StyledContentWrapper>
                {data.opisDoKobiet ? parse(data.opisDoKobiet) : null}
              </StyledContentWrapper>
              <Button
                btnData={data.przyciskKobiety}
                variant="green"
                haswidth="355px"
                hasheight="88px"
                hasfontsize="20px"
              />
            </StyledContent>
          ) : (
            <StyledContent>
              <StyledContentWrapper>
                {data.opisDoMlodziez ? parse(data.opisDoMlodziez) : null}
              </StyledContentWrapper>
              <Button
                btnData={data.przyciskMlodziez}
                variant="green"
                haswidth="355px"
                hasheight="88px"
                hasfontsize="20px"
              />
            </StyledContent>
          )}
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <Image
            imageDesktop={data.zdjeciePoPrawo}
            imageMobil={data.zdjeciePoPrawoMobile}
          />
        </StyledRightWrapper>
      </StyledHomeSecondSection>
    </Container>
  );
};

export default HomeSecondSection;
