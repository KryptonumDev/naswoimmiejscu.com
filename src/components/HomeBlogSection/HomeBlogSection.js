import React, { useState, useRef } from "react";
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
  StyledWhiteCircle,
  StyledMobileBlogText,
} from "./StyledHomeBlogSection";
import { StyledText } from "../Text/StyledText";
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
  isWomensYouthPage,
  youth,
  isCasePage
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
    arrows: false,
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalSwiping: false,
    autoplay: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 876,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsRec = {
    dots: true,
    arrows: false,
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
      <div className="fade">
        <StyledScrollWrapper>
          {edges.map(({ node }) => (
            <BlogHomeCard
              key={node.slug}
              slug={node.slug}
              title={node.title}
              desc={node.artykul.miniaturka.krotkiOpisDoMiniaturki}
              imageDesktop={node.artykul.miniaturka.zdjecieDoMiniaturki}
              isCase={isCase}
            />
          ))}
        </StyledScrollWrapper>
      </div>
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
      {isWomensYouthPage ? (
        <StyledMobileBlogText youth={youth}>
          <StyledText
            hasdeclaredfontsize="22px"
            hasdeclaredfontweight="700"
            hasdeclaredfontcolor="var(--normalBlack)"
            hasdeclaredmargin="0 0 44px 8px"
          >
            BLOG
          </StyledText>
          <svg
            width="165"
            height="47"
            viewBox="0 0 165 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.08"
              d="M44.446 0.0999968C44.9373 0.0999968 45.3617 0.278664 45.719 0.635998C46.0763 0.993332 46.255 1.41767 46.255 1.909V45.191C46.255 45.6823 46.0763 46.1067 45.719 46.464C45.3617 46.8213 44.9373 47 44.446 47H33.659C32.587 47 31.6937 46.531 30.979 45.593L16.373 26.967V45.191C16.373 45.6823 16.1943 46.1067 15.837 46.464C15.4797 46.8213 15.0553 47 14.564 47H2.102C1.61067 47 1.18633 46.8213 0.829 46.464C0.471667 46.1067 0.293 45.6823 0.293 45.191V1.909C0.293 1.41767 0.471667 0.993332 0.829 0.635998C1.18633 0.278664 1.61067 0.0999968 2.102 0.0999968H12.956C14.028 0.0999968 14.899 0.546664 15.569 1.44L30.175 21.607V1.909C30.175 1.41767 30.3537 0.993332 30.711 0.635998C31.0683 0.278664 31.4927 0.0999968 31.984 0.0999968H44.446ZM102.107 33.935C102.598 33.935 103.022 34.1137 103.38 34.471C103.737 34.8283 103.916 35.2527 103.916 35.744V45.191C103.916 45.6823 103.737 46.1067 103.38 46.464C103.022 46.8213 102.598 47 102.107 47H59.7628C59.2715 47 58.8472 46.8213 58.4898 46.464C58.1325 46.1067 57.9538 45.6823 57.9538 45.191V1.909C57.9538 1.41767 58.1325 0.993332 58.4898 0.635998C58.8472 0.278664 59.2715 0.0999968 59.7628 0.0999968H101.437C101.928 0.0999968 102.352 0.278664 102.71 0.635998C103.067 0.993332 103.246 1.41767 103.246 1.909V11.356C103.246 11.8473 103.067 12.2717 102.71 12.629C102.352 12.9863 101.928 13.165 101.437 13.165H75.3738V17.386H97.7518C98.2432 17.386 98.6675 17.5647 99.0248 17.922C99.3822 18.2793 99.5608 18.7037 99.5608 19.195V27.905C99.5608 28.3963 99.3822 28.8207 99.0248 29.178C98.6675 29.5353 98.2432 29.714 97.7518 29.714H75.3738V33.935H102.107ZM131.427 45.191C131.293 45.593 130.958 45.995 130.422 46.397C129.93 46.799 129.283 47 128.479 47H119.099C118.25 47 117.535 46.7543 116.955 46.263C116.419 45.727 116.106 45.124 116.017 44.454L110.188 1.775V1.574C110.188 1.172 110.322 0.836998 110.59 0.568999C110.902 0.256331 111.26 0.0999968 111.662 0.0999968H123.186C124.079 0.0999968 124.794 0.367997 125.33 0.903998C125.91 1.44 126.245 2.11 126.335 2.914L128.479 23.416L132.365 12.763C132.499 12.3163 132.811 11.892 133.303 11.49C133.839 11.0433 134.509 10.82 135.313 10.82H139.869C140.673 10.82 141.32 11.0433 141.812 11.49C142.348 11.892 142.683 12.3163 142.817 12.763L146.703 23.416L148.847 2.914C148.936 2.11 149.249 1.44 149.785 0.903998C150.365 0.367997 151.102 0.0999968 151.996 0.0999968H163.52C163.922 0.0999968 164.257 0.256331 164.525 0.568999C164.837 0.836998 164.994 1.172 164.994 1.574V1.775L159.165 44.454C159.075 45.124 158.74 45.727 158.16 46.263C157.624 46.7543 156.931 47 156.083 47H146.703C145.899 47 145.229 46.799 144.693 46.397C144.201 45.995 143.889 45.593 143.755 45.191L137.591 31.054L131.427 45.191Z"
              fill="#203533"
            />
          </svg>
        </StyledMobileBlogText>
      ) : null}
      <Slider ref={slider} {...settings}>
        {edges.map(({ node }) => (
          <BlogHomeCard
            key={node.slug}
            slug={node.slug}
            title={node.title}
            desc={node.artykul.miniaturka.krotkiOpisDoMiniaturki}
            imageDesktop={node.artykul.miniaturka.zdjecieDoMiniaturki}
            isCase={isCase}
          />
        ))}
      </Slider>
      {stronaGlowna.sekcjaZBlogiem.blogPrzycisk && !isWomensYouthPage ? (
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
      className={mobile ? "mobile" : "desctop"}
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
      {isCase ? leftSectionCase : null}

      {/* all widths */}
      {isCase ? null : <BlogText />}

      {/* 993 - dodane do css */}
      {isCase ? (
        blogSlider
      ) : (
        <>
          {blogSlider}
          <RecomendationText mobile={true} />
          {recomendationSlider}
        </>
      )}

      {/* 993 + dodane do css */}
      {isCase ? null : <RecomendationText mobile={false} />}
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
      <StyledLeftWrapper iscase={isCase}>{leftWrapper}</StyledLeftWrapper>
      <StyledRightWrapper iscase={isCase}>
        {isWomensYouthPage || isCasePage ? (
          <StyledWhiteCircle>
            <svg
              width="889"
              height="889"
              viewBox="0 0 889 889"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="444.5"
                cy="444.5"
                r="409"
                stroke="white"
                stroke-width="71"
              />
            </svg>
          </StyledWhiteCircle>
        ) : null}
        {desktopElements}
      </StyledRightWrapper>
    </StyledHomeBlogSection>
  );
};

export default HomeBlogSection;

const Mobile = styled.div``;
