import React, { useState, useRef } from "react";
import parse from "html-react-parser";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";

import BlogHomeCard from "../BlogHomeCard/BlogHomeCard";
import Button from "../Button/Button";
import RecommendationCard from "../RecommendationCard/RecommendationCard";
import MeetSomebody from "../MeetSomebody/MeetSomebody";

import QuoteIcon from "../QuoteIcon/QuoteIcon";

import { StyledCircle } from "../Circle/StyledCircle";
import {
  StyledHomeBlogSection,
  StyledContent,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledDescWrapper2,
  StyledTitleElement,
  StyledBlogSliderWrapper,
  StyledScrollWrapper,
  StyledDesktopScroll,
} from "./StyledHomeBlogSection";
import { StyledMobileIcon } from "../RecommendationCard/StyledRecommendationCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBlogSection = ({
  isCase,
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
      allWpPost(sort: {date: DESC}) {
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
      allWpCaseStudy(sort: {date: DESC}) {
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
                avatarIkonka {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  `);
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

  const desktopScrollBlog = (
    <StyledDesktopScroll>
      <div className="fade">
        <StyledScrollWrapper>
          {edges.slice(0, 3).map(({ node }) => (
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
            imageDesktop={node.artykul.miniaturka.zdjecieDoMiniaturki}
            isCase={isCase}
          />
        ))}
      </Slider>
    </StyledBlogSliderWrapper>
  );

  const recomendationScroll = (
    <StyledDesktopScroll notpadding>
      <StyledScrollWrapper notpadding>
        {caseStudy.slice(0, 3).map(({ node }, index) => (
          <RecommendationCard
            key={node.slug}
            slug={node.slug}
            avatar={node.caseStudyArtykul.miniaturkaCaseStudy.avatar}
            avatarIcon={node.caseStudyArtykul.miniaturkaCaseStudy.avatarIkonka}
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
            avatarIcon={node.caseStudyArtykul.miniaturkaCaseStudy.avatarIkonka}
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
    </StyledBlogSliderWrapper>
  );

  const BlogText = () => (
    <>
      <StyledContent hasdeclaredpadding="0 87px 0 0">
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
    <StyledContent hasdeclaredpadding="0 87px 0 0">
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
      {stronaGlowna.sekcjaZBlogiem.rekomendacjePrzycisk ? (
        <Button
          btnData={stronaGlowna.sekcjaZBlogiem.rekomendacjePrzycisk}
          className="blog-recomendation-slider"
          haswidth="366px"
          hasheight="88px"
          hasfontsize="20px"
          ariaLabel="link"
        />
      ) : null}
    </StyledContent>
  );

  return (
    <StyledHomeBlogSection iscase={isCase ? "true" : false}>
      <StyledLeftWrapper iscase={isCase ? "true" : false}>
        <div>
          <RecomendationText />
          {anotherPerson ? (
            <MeetSomebody
              data={anotherPerson}
              icon={iconImage}
              tekstDoLinku={tekstDoLinku}
            />
          ) : null}
        </div>
        {recomendationSlider}
        {recomendationScroll}
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <div>
          <BlogText />
          {stronaGlowna.sekcjaZBlogiem.blogPrzycisk ? (
            <Button
              btnData={stronaGlowna.sekcjaZBlogiem.blogPrzycisk}
              className="blog-slider-btn"
              haswidth="366px"
              hasheight="88px"
              hasfontsize="20px"
              ariaLabel="link"
            />
          ) : null}
        </div>
        {desktopScrollBlog}
        {blogSlider}
        {stronaGlowna.sekcjaZBlogiem.blogPrzycisk ? (
          <Button
            btnData={stronaGlowna.sekcjaZBlogiem.blogPrzycisk}
            className="blog-slider-btn blog-slider-btn--show"
            haswidth="366px"
            hasheight="88px"
            hasfontsize="20px"
            ariaLabel="link"
          />
        ) : null}
      </StyledRightWrapper>
    </StyledHomeBlogSection>
  );
};

export default HomeBlogSection;
