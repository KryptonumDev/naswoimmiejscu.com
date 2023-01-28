import React, { useState, useCallback } from "react";
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
  StyledMobileImage,
} from "./StyledHomeSecondSection";
import { StyledText } from "../Text/StyledText";

const HomeSecondSection = ({ data }) => {
  const [isWomens, setIsWomens] = useState(false);

  const handleChange = useCallback(
    (womens) => {
      setIsWomens(womens);
    },
    [setIsWomens]
  );

  const handleOnKeyUp = useCallback((e, womens) => {
    if (e.keyCode === 13) {
      setIsWomens(womens);
    }
  }, [setIsWomens])

  return (
    <Container>
      <StyledHomeSecondSection>
        <StyledLeftWrapper>
          <StyledTitleWrapper className="home-second-section">
            {data.tytulPoLewo ? parse(data.tytulPoLewo) : null}
          </StyledTitleWrapper>
          <StyledMobileImage>
            <Image
              imageDesktop={data.zdjeciePoPrawo}
              imageMobil={data.zdjeciePoPrawoMobile}
            />
          </StyledMobileImage>
          <StyledDescWrapper className="home-second-section">
            {data.opisPoLewo ? parse(data.opisPoLewo) : null}
          </StyledDescWrapper>
          <StyledIconsWrapper iswomens={isWomens}>
            <div onClick={() => handleChange(false)} tabIndex="0" onKeyUp={(e) => handleOnKeyUp(e, false)}>
              <CustomButton
                onClick={() => handleChange(false)}
                type="button"
                className={isWomens ? 'button' : 'button active'}
                bgColor={isWomens ? "var(--btnGrey)" : "var(--normalGreen)"}
                tabIndex="-1"
              >
                ikonka
              </CustomButton>
              <StyledText
                className={isWomens ? 'text' : 'text active'}
                hasdeclaredfontsize="clamp(16px, 1.667vw, 32px)"
                hasdeclaredfontweight="700"
                hasdeclaredfontcolor={
                  isWomens ? "var(--btnGrey)" : "var(--normalBlack)"
                }
              >
                {data.tekstDoIkonkiMlodziez}
              </StyledText>
            </div>
            <div onClick={() => handleChange(true)} tabIndex="0" onKeyUp={(e) => handleOnKeyUp(e, true)}>
              <CustomButton
                className={isWomens ? 'active button' : 'button'}
                bgColor={isWomens ? "var(--normalGreen)" : "var(--btnGrey)"}
                onClick={() => handleChange(true)}
                type="button"
                tabIndex="-1"
              >
                ikonka
              </CustomButton>
              <StyledText
                className={isWomens ? 'text active' : 'text'}
                hasdeclaredfontsize="clamp(16px, 1.667vw, 32px)"
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
                hasClampHeight="4.583vw"
                hasfontsize="clamp(16px, 1.042vw, 20px)"
                hasClampWidth="18.490vw"
                hasBasicWidth="277px"
                hasBasicHeight="73px"
                className="home-second-section"
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
                hasClampHeight="4.583vw"
                hasfontsize="clamp(16px, 1.042vw, 20px)"
                hasClampWidth="18.490vw"
                hasBasicWidth="277px"
                hasBasicHeight="73px"
                className="home-second-section"
              />
            </StyledContent>
          )}
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <Image
            className='image'
            imageDesktop={data.zdjeciePoPrawo}
            imageMobil={data.zdjeciePoPrawoMobile}
          />
        </StyledRightWrapper>
      </StyledHomeSecondSection>
    </Container>
  );
};

export default HomeSecondSection;
