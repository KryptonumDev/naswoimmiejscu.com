import React, { useState, useRef, useMemo } from "react";
import parse from "html-react-parser";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";

import BlogHomeCard from "../BlogHomeCard/BlogHomeCard";
import Button from "../Button/Button";
import RecommendationCard from "../RecommendationCard/RecommendationCard";

import AHASvg from "../AHASvg/AHASvg";
import QuoteIcon from "../QuoteIcon/QuoteIcon";

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
  StyledScrollWrapper,
  StyledDesktopScroll,
} from "./StyledHomeBlogSection";

import { StyledMobileIcon } from "../RecommendationCard/StyledRecommendationCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBlogSection = () => {
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
                tekstPrzycisku
                zdjecieDoMiniaturki {
                  altText
                  title
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                zdjecieDoMiniaturkiMobile {
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
  const { isLgUp } = useScreenService();

  const settings = {
    dots: false,
    infinite: false,
    vertical: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    verticalSwiping: false,
    autoplay: false,
    infinite: true,
  };

  const settingsRec = {
    dots: true,
    infinite: false,
    vertical: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: false,
    autoplay: false,
    infinite: false,
  };

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
            imageMobile={node.artykul.miniaturka.zdjecieDoMiniaturkiMobile}
          />
        ))}
      </StyledScrollWrapper>
      <Button
        btnData={stronaGlowna.sekcjaZBlogiem.blogPrzycisk}
        className="blog-slider-btn"
        haswidth="366px"
        hasheight="88px"
        hasfontsize="20px"
      />
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
            imageMobile={node.artykul.miniaturka.zdjecieDoMiniaturkiMobile}
          />
        ))}
      </Slider>
      <Button
        btnData={stronaGlowna.sekcjaZBlogiem.blogPrzycisk}
        className="blog-slider-btn"
        haswidth="366px"
        hasheight="88px"
        hasfontsize="20px"
      />
    </StyledBlogSliderWrapper>
  );

  const recomendationScroll = (
    <StyledDesktopScroll notpadding>
      <StyledScrollWrapper notpadding>
        {caseStudy.map(({ node }, index) => (
          <RecommendationCard
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
      <Button
        btnData={stronaGlowna.sekcjaZBlogiem.rekomendacjePrzycisk}
        className="blog-recomendation-slider"
        haswidth="366px"
        hasheight="88px"
        hasfontsize="20px"
      />
    </StyledDesktopScroll>
  );

  const recomendationSlider = (
    <StyledBlogSliderWrapper isright>
      <Slider ref={secondSlider} {...settingsRec}>
        {caseStudy.map(({ node }, index) => (
          <RecommendationCard
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
      </Slider>
      <StyledMobileIcon>
        <QuoteIcon />
      </StyledMobileIcon>
      <Button
        btnData={stronaGlowna.sekcjaZBlogiem.rekomendacjePrzycisk}
        className="blog-recomendation-slider"
        haswidth="366px"
        hasheight="88px"
        hasfontsize="20px"
      />
    </StyledBlogSliderWrapper>
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
    <StyledHomeBlogSection>
      <StyledLeftWrapper>{leftWrapper}</StyledLeftWrapper>
      {isLgUp ? (
        <StyledRightWrapper>{desktopElements}</StyledRightWrapper>
      ) : null}
    </StyledHomeBlogSection>
  );
};

export default HomeBlogSection;
