import React from "react";
import parse from "html-react-parser";

import ContactForm from "../ContactForm/ContactForm";
import Image from "../Image/Image";
import SmallWhiteCircle from "../SmallWhiteCircle/SmallWhiteCircle";

import { StyledTitleWrapper } from "../HomeHeroSection/StyledHomeHeroSection";
import {
  StyledHomeContact,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledImageWrapper,
  StyledDescWrapperEdit,
  StyledCircleWrapper,
} from "./StyledHomeContact";

const HomeContact = ({ data }) => {
  return (
    <StyledHomeContact>
      <StyledLeftWrapper>
        <StyledTitleWrapper className="home-contact">
          {data.tytul ? parse(data.tytul) : null}
        </StyledTitleWrapper>
        <StyledDescWrapperEdit className="home-contact">
          {data.opis ? parse(data.opis) : null}
        </StyledDescWrapperEdit>
        <StyledImageWrapper>
          <StyledCircleWrapper>
            <SmallWhiteCircle />
          </StyledCircleWrapper>
          <Image imageDesktop={data.obraz} imageMobile={data.obrazMobile} />
        </StyledImageWrapper>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <ContactForm />
      </StyledRightWrapper>
    </StyledHomeContact>
  );
};

export default HomeContact;
