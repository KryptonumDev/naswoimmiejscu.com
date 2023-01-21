import React, { useState, useRef, useMemo } from "react";
import parse from "html-react-parser";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";

import BlogHomeCard from "../BlogHomeCard/BlogHomeCard";
import Button from "../Button/Button";
import RecommendationCard from "../RecommendationCard/RecommendationCard";

import AHASvg from "../AHASvg/AHASvg";

import { useScreenService } from "../../utils/useScreenService";

import { StyledCircle } from "../Circle/StyledCircle";
import {
  StyledHomeBlogSection,
  StyledContent,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledDescWrapper2,
  StyledTitleElement,
  StyledIconWrapper,
  StyledBlogSliderWrapper,
  StyledRecomendationSliderWrapper,
} from "./StyledHomeBlogSection";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBlogSection = () => {
  const {
    wpPage: { stronaGlowna },
  } = useStaticQuery(graphql`
    query homeBlog {
      wpPage(id: { eq: "cG9zdDoyOA==" }) {
        stronaGlowna {
          sekcjaZBlogiem {
            rekomendacjeTytul
            rekomendacjeOpis
            blogTytul
            rekomendacjePrzycisk {
              url
              title
              target
            }
            blogOpis
            blogPrzycisk {
              url
              title
              target
            }
          }
        }
      }
    }
  `);
  const [isBlog, setIsBlog] = useState(true);
  const slider = useRef(null);
  const { isLgUp } = useScreenService();

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    // swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          vertical: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          verticalSwiping: false,
          autoplay: false,
          infinite: false,
        },
      },
      {
        breakpoint: 776,
        settings: {
          vertical: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          verticalSwiping: false,
          autoplay: false,
          infinite: false,
        },
      },
    ],
  };

  const blogSlider = (
    <StyledBlogSliderWrapper>
      <div>
        <Slider ref={slider} {...settings}>
          <BlogHomeCard
            image=""
            title="Lorem ipsum dolor"
            desc="Lorem ipsum dolor sit amet, consecteturelit, sed do eiusmod tempor incididunt ut dolore magna aliqua. Quis ipsum"
            date="Warszawa, 01.10.2022 r."
            slug=""
          />
          <BlogHomeCard
            image=""
            title="Lorem ipsum dolor"
            desc="Lorem ipsum dolor sit amet, consecteturelit, sed do eiusmod tempor incididunt ut dolore magna aliqua. Quis ipsum"
            date="Warszawa, 01.10.2022 r."
            slug=""
          />
          <BlogHomeCard
            image=""
            title="Lorem ipsum dolor"
            desc="Lorem ipsum dolor sit amet, consecteturelit, sed do eiusmod tempor incididunt ut dolore magna aliqua. Quis ipsum"
            date="Warszawa, 01.10.2022 r."
            slug=""
          />
          <BlogHomeCard
            image=""
            title="Lorem ipsum dolor sit"
            desc="Lorem ipsum dolor sit amet, consecteturelit, sed do eiusmod tempor incididunt ut dolore magna aliqua. Quis ipsum"
            date="Warszawa, 01.10.2022 r."
            slug=""
          />
        </Slider>
      </div>
      <Button
        btnData={stronaGlowna.sekcjaZBlogiem.blogPrzycisk}
        className="blog-slider-btn"
      />
    </StyledBlogSliderWrapper>
  );

  const recomendationSlider = (
    <StyledRecomendationSliderWrapper>
      <RecommendationCard />
      <Button
        btnData={stronaGlowna.sekcjaZBlogiem.rekomendacjePrzycisk}
        className="blog-recomendation-slider"
      />
    </StyledRecomendationSliderWrapper>
  );

  const blogText = (
    <>
      <StyledIconWrapper>
        <AHASvg />
      </StyledIconWrapper>
      <StyledContent
        onClick={isLgUp ? () => setIsBlog(true) : null}
        type="button"
        hasdeclaredpadding="64px 87px 0 0"
        isactive={isLgUp ? isBlog : true}
      >
        <StyledCircle
          hasdeclaredbg="var(--normalGreen)"
          className="blog-mobile-section-hide"
        />
        <StyledTitleElement className="home-blog-section-text">
          {stronaGlowna.sekcjaZBlogiem.blogTytul
            ? parse(stronaGlowna.sekcjaZBlogiem.blogTytul)
            : null}

          <StyledCircle
            hasdeclaredbg="var(--normalGreen)"
            className="blog-mobile-section-show"
          />
        </StyledTitleElement>
        <StyledDescWrapper2 isleft className="home-blog-section-text">
          {stronaGlowna.sekcjaZBlogiem.blogTytul
            ? parse(stronaGlowna.sekcjaZBlogiem.blogOpis)
            : null}
        </StyledDescWrapper2>
      </StyledContent>
    </>
  );

  const recomendationText = (
    <StyledContent
      onClick={isLgUp ? () => setIsBlog(false) : null}
      type="button"
      isright
      hasdeclaredpadding="0 87px 0 0"
      isactive={isLgUp ? !isBlog : true}
    >
      <StyledCircle className="blog-mobile-section-hide" />
      <StyledTitleElement className="home-blog-section-text">
        {stronaGlowna.sekcjaZBlogiem.rekomendacjeTytul
          ? parse(stronaGlowna.sekcjaZBlogiem.rekomendacjeTytul)
          : null}

        <StyledCircle className="blog-mobile-section-show" />
      </StyledTitleElement>
      <StyledDescWrapper2 className="home-blog-section-text">
        {stronaGlowna.sekcjaZBlogiem.rekomendacjeOpis
          ? parse(stronaGlowna.sekcjaZBlogiem.rekomendacjeOpis)
          : null}
      </StyledDescWrapper2>
    </StyledContent>
  );

  const leftWrapper = (
    <>
      {isLgUp ? (
        blogText
      ) : (
        <>
          {blogText}
          {blogSlider}
          {recomendationText}
          {recomendationSlider}
        </>
      )}
      {isLgUp ? recomendationText : null}
    </>
  );

  const desktopElements = <>{isBlog ? blogSlider : recomendationSlider}</>;

  return (
    <StyledHomeBlogSection>
      <StyledLeftWrapper>{leftWrapper}</StyledLeftWrapper>
      {isLgUp ? (
        <StyledRightWrapper>{desktopElements}</StyledRightWrapper>
      ) : null}
    </StyledHomeBlogSection>
  );
};

export default HomeBlogSection;
