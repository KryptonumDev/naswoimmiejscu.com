import React from "react";
import parse from "html-react-parser";
import Container from "../Container/Container";
import Image from "../Image/Image";
import ContentWrapper from "./ContentWrapper";
import { StyledDescWrapper, StyledTitleWrapper } from "../HomeHeroSection/StyledHomeHeroSection";
import { StyledHomeSecondSection, StyledLeftWrapper, StyledRightWrapper, StyledMobileImage } from "./StyledHomeSecondSection";

const HomeSecondSection = ({ data }) => {
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
          <ContentWrapper data={data} />
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
