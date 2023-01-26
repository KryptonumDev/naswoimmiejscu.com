import React, { useState, useRef, useMemo } from "react";
import parse from "html-react-parser";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";

import BlogHomeCard from "../BlogHomeCard/BlogHomeCard";
import Button from "../Button/Button";
import RecommendationCard from "../RecommendationCard/RecommendationCard";
import MeetSomebody from "../MeetSomebody/MeetSomebody";

import AHASvg from "../AHASvg/AHASvg";
import QuoteIcon from "../QuoteIcon/QuoteIcon";

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
  StyledScrollWrapper,
  StyledDesktopScroll,
  StyledLeftCaseWrapper,
  StyledCaseTitle,
  StyledDescCase,
  StyledAddnotationFirst,
  StyledAddnotationSecondDiv,
} from "./StyledHomeBlogSection";

import { StyledMobileIcon } from "../RecommendationCard/StyledRecommendationCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const HomeBlogSection = ({
  isCase,
  addnotationSecond,
  addnotationFirst,
  blogTitle,
  blogOpis,
  anotherPerson,
  iconImage,
  tekstDoLinku,
  recDif,
}) => {
  const {
    wpPage: { stronaGlowna },
    allWpPost: { edges },
    allWpCaseStudy: { edges: caseStudy },
  } = useStaticQuery(graphql`
    query homeBlog {
      allWpPost {
        edges {
          node {
            slug
            title
            date
            artykul {
              miniaturka {
                krotkiOpisDoMiniaturki
                zdjecieDoMiniaturki {
                  altText
                  title
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
      }
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
      allWpCaseStudy {
        edges {
          node {
            slug
            caseStudyArtykul {
              miniaturkaCaseStudy {
                opisDoMiniaturki
                podpisPodIminiem
                nazwaOsobyDoMiniaturki
                avatar {
                  altText
                  title
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const [isBlog, setIsBlog] = useState(true);
  const slider = useRef(null);
  const secondSlider = useRef(null);

  const settings = {
    dots: false,
    vertical: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    verticalSwiping: false,
    autoplay: false,
    infinite: true,
  };

  const settingsRec = {
    dots: true,
    vertical: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: false,
    autoplay: false,
    infinite: false,
  };

  const leftSectionCase = (
    <StyledLeftCaseWrapper>
      {anotherPerson ? (
        <MeetSomebody
          data={anotherPerson}
          icon={iconImage}
          tekstDoLinku={tekstDoLinku}
        />
      ) : null}
      <div>
        <StyledCaseTitle>{blogTitle ? parse(blogTitle) : null}</StyledCaseTitle>
        <StyledDescCase>{blogOpis ? parse(blogOpis) : null}</StyledDescCase>
      </div>
      <div>
        <StyledAddnotationFirst>
          {addnotationFirst ? parse(addnotationFirst) : null}
        </StyledAddnotationFirst>
        <StyledAddnotationSecondDiv>
          {addnotationSecond ? parse(addnotationSecond) : null}
        </StyledAddnotationSecondDiv>
      </div>
    </StyledLeftCaseWrapper>
  );

  const desktopScrollBlog = (
    <StyledDesktopScroll>
      <StyledScrollWrapper>
        {edges.map(({ node }) => (
          <BlogHomeCard
            key={node.slug}
            slug={node.slug}
            title={node.title}
            desc={node.artykul.miniaturka.krotkiOpisDoMiniaturki}
            date={node.date}
            imageDesktop={node.artykul.miniaturka.zdjecieDoMiniaturki}
            isCase={isCase}
          />
        ))}
      </StyledScrollWrapper>
      {stronaGlowna.sekcjaZBlogiem.blogPrzycisk ? (
        <Button
          btnData={stronaGlowna.sekcjaZBlogiem.blogPrzycisk}
          className="blog-slider-btn"
          haswidth="366px"
          hasheight="88px"
          hasfontsize="20px"
        />
      ) : null}
    </StyledDesktopScroll>
  );

  const blogSlider = (
    <StyledBlogSliderWrapper>
      <Slider ref={slider} {...settings}>
        {edges.map(({ node }) => (
          <BlogHomeCard
            key={node.slug}
            slug={node.slug}
            title={node.title}
            desc={node.artykul.miniaturka.krotkiOpisDoMiniaturki}
            date={node.date}
            imageDesktop={node.artykul.miniaturka.zdjecieDoMiniaturki}
            isCase={isCase}
          />
        ))}
      </Slider>
      {stronaGlowna.sekcjaZBlogiem.blogPrzycisk ? (
        <Button
          btnData={stronaGlowna.sekcjaZBlogiem.blogPrzycisk}
          className="blog-slider-btn"
          haswidth="366px"
          hasheight="88px"
          hasfontsize="20px"
        />
      ) : null}
    </StyledBlogSliderWrapper>
  );

  const recomendationScroll = (
    <StyledDesktopScroll notpadding>
      <StyledScrollWrapper notpadding>
        {caseStudy.map(({ node }, index) => (
          <RecommendationCard
            key={node.slug}
            slug={node.slug}
            avatar={node.caseStudyArtykul.miniaturkaCaseStudy.avatar}
            name={
              node.caseStudyArtykul.miniaturkaCaseStudy.nazwaOsobyDoMiniaturki
            }
            nameDesc={
              node.caseStudyArtykul.miniaturkaCaseStudy.podpisPodIminiem
            }
            desc={node.caseStudyArtykul.miniaturkaCaseStudy.opisDoMiniaturki}
            isDiffBg={index % 2 ? false : true}
          />
        ))}
      </StyledScrollWrapper>
      {stronaGlowna.sekcjaZBlogiem.rekomendacjePrzycisk ? (
        <Button
          btnData={stronaGlowna.sekcjaZBlogiem.rekomendacjePrzycisk}
          className="blog-recomendation-slider"
          haswidth="366px"
          hasheight="88px"
          hasfontsize="20px"
        />
      ) : null}
    </StyledDesktopScroll>
  );

  const recomendationSlider = (
    <StyledBlogSliderWrapper isright>
      <Slider ref={secondSlider} {...settingsRec}>
        {caseStudy.map(({ node }, index) => (
          <RecommendationCard
            key={node.slug}
            slug={node.slug}
            avatar={node.caseStudyArtykul.miniaturkaCaseStudy.avatar}
            name={
              node.caseStudyArtykul.miniaturkaCaseStudy.nazwaOsobyDoMiniaturki
            }
            nameDesc={
              node.caseStudyArtykul.miniaturkaCaseStudy.podpisPodIminiem
            }
            desc={node.caseStudyArtykul.miniaturkaCaseStudy.opisDoMiniaturki}
            isDiffBg={index % 2 ? false : true}
            recDif={recDif}
          />
        ))}
      </Slider>
      <StyledMobileIcon recdif={recDif}>
        <QuoteIcon />
      </StyledMobileIcon>
      {stronaGlowna.sekcjaZBlogiem.rekomendacjePrzycisk ? (
        <Button
          btnData={stronaGlowna.sekcjaZBlogiem.rekomendacjePrzycisk}
          className={
            recDif
              ? "blog-recomendation-slider-show"
              : "blog-recomendation-slider"
          }
          haswidth="366px"
          hasheight="88px"
          hasfontsize="20px"
        />
      ) : null}
    </StyledBlogSliderWrapper>
  );

  const BlogText = (mobile) => (
    <>
      <StyledIconWrapper>
        <AHASvg />
      </StyledIconWrapper>
      <StyledContent
        onClick={() => setIsBlog(true)}
        type="button"
        hasdeclaredpadding="64px 87px 0 0"
        isactive={isBlog}
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

  const RecomendationText = ({ mobile }) => (
    <StyledContent
      onClick={() => setIsBlog(false)}
      type="button"
      isright
      hasdeclaredpadding="0 87px 0 0"
      isactive={!isBlog}
      className={mobile ? 'mobile' : 'desctop'}
    >
      <StyledCircle className="blog-mobile-section-hide" />
      <StyledTitleElement className="home-blog-section-text">
        {stronaGlowna.sekcjaZBlogiem.rekomendacjeTytul
          ? parse(stronaGlowna.sekcjaZBlogiem.rekomendacjeTytul)
          : null}

        <StyledCircle className="blog-mobile-section-show blog-mobile-section-show--recomendation" />
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
      {/* 993 + dodane do css */}
      {
        isCase
          ? leftSectionCase
          : null
      }

      {/* all widths */}
      {
        isCase
          ? null
          : <BlogText />
      }

      {/* 993 - dodane do css */}
      {isCase
        ? { blogSlider }
        : <>
          {blogSlider}
          <RecomendationText mobile={true} />
          {recomendationSlider}
        </>
      }

      {/* 993 + dodane do css */}
      {isCase
        ? null
        : <RecomendationText mobile={false} />
      }
    </>
  );

  const desktopElements = (
    <AnimatePresence key={isBlog}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key={isBlog}
      >
        {isBlog ? desktopScrollBlog : recomendationScroll}
      </motion.div>
    </AnimatePresence>
  );

  return (
    <StyledHomeBlogSection iscase={isCase}>
      <StyledLeftWrapper iscase={isCase}>
        {leftWrapper}
      </StyledLeftWrapper>
      <StyledRightWrapper iscase={isCase}>
        {desktopElements}
      </StyledRightWrapper>
    </StyledHomeBlogSection>
  );
};

export default HomeBlogSection;

const Mobile = styled.div`

`