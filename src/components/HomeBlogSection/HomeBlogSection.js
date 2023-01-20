import React, { useState, useRef } from "react";
import parse from "html-react-parser";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";

import BlogHomeCard from "../BlogHomeCard/BlogHomeCard";
import Button from "../Button/Button";

import AHASvg from "../AHASvg/AHASvg";

import { StyledCircle } from "../Circle/StyledCircle";
import {
  StyledHomeBlogSection,
  StyledContent,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledDescWrapper,
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
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };

  return (
    <StyledHomeBlogSection>
      <StyledLeftWrapper>
        <StyledIconWrapper>
          <AHASvg />
        </StyledIconWrapper>
        <StyledContent
          onClick={() => setIsBlog(true)}
          type="button"
          hasdeclaredpadding="64px 87px 0 0"
          isactive={isBlog}
        >
          <StyledCircle hasdeclaredbg="var(--normalGreen)" />
          <StyledTitleElement>
            {stronaGlowna.sekcjaZBlogiem.blogTytul
              ? parse(stronaGlowna.sekcjaZBlogiem.blogTytul)
              : null}
          </StyledTitleElement>
          <StyledDescWrapper isleft>
            {stronaGlowna.sekcjaZBlogiem.blogTytul
              ? parse(stronaGlowna.sekcjaZBlogiem.blogOpis)
              : null}
          </StyledDescWrapper>
        </StyledContent>
        <StyledContent
          onClick={() => setIsBlog(false)}
          type="button"
          isright
          hasdeclaredpadding="0 87px 0 0"
          isactive={!isBlog}
        >
          <StyledCircle />
          <StyledTitleElement>
            {stronaGlowna.sekcjaZBlogiem.rekomendacjeTytul
              ? parse(stronaGlowna.sekcjaZBlogiem.rekomendacjeTytul)
              : null}
          </StyledTitleElement>
          <StyledDescWrapper>
            {stronaGlowna.sekcjaZBlogiem.rekomendacjeOpis
              ? parse(stronaGlowna.sekcjaZBlogiem.rekomendacjeOpis)
              : null}
          </StyledDescWrapper>
        </StyledContent>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        {isBlog ? (
          <StyledBlogSliderWrapper>
            <Slider ref={slider} {...settings}>
              <BlogHomeCard
                image=""
                title="dsadsa"
                desc="dsadsa"
                date="dsadsa"
                slug=""
              />
              <BlogHomeCard
                image=""
                title="dsadsa"
                desc="dsadsa"
                date="dsadsa"
                slug=""
              />
              <BlogHomeCard
                image=""
                title="dsadsa"
                desc="dsadsa"
                date="dsadsa"
                slug=""
              />
              <BlogHomeCard
                image=""
                title="dsadsa"
                desc="dsadsa"
                date="dsadsa"
                slug=""
              />
            </Slider>
            <Button
              btnData={stronaGlowna.sekcjaZBlogiem.blogPrzycisk}
              className="blog-slider-btn"
            />
          </StyledBlogSliderWrapper>
        ) : (
          <StyledRecomendationSliderWrapper>
            <Button
              btnData={stronaGlowna.sekcjaZBlogiem.rekomendacjePrzycisk}
            />
          </StyledRecomendationSliderWrapper>
        )}
      </StyledRightWrapper>
    </StyledHomeBlogSection>
  );
};

export default HomeBlogSection;
