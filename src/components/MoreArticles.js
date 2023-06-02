import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { ArrowLeft, ArrowRight } from "../atoms/Icons";
import Button from "./Button/Button";

const MoreArticles = ({ prevPage, nextPage }) => {
  return (
    <Wrapper>
      {prevPage && (
        <Link to={`/blog/${prevPage.slug}`} className="prevPage">
          <p className="arrow">
            <ArrowLeft />
            <span>Poprzedni artykuł</span>
          </p>
          <article>
            <GatsbyImage
              image={prevPage.artykul.miniaturka.zdjecieDoMiniaturki.localFile.childImageSharp.gatsbyImageData}
              alt={prevPage.artykul.miniaturka.zdjecieDoMiniaturki.altText || ''}
              className="img"
            />
            <div className="copy">
              <h3>{prevPage.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: prevPage.excerpt }} className='p'></div>
              <span className="btn">Przczytaj</span>
            </div>
          </article>
        </Link>
      )}
      {nextPage && (
        <Link to={`/blog/${nextPage.slug}`} className="nextPage">
          <p className="arrow">
            <span>Następny artykuł</span>
            <ArrowRight />
          </p>
          <article>
            <GatsbyImage
              image={nextPage.artykul.miniaturka.zdjecieDoMiniaturki.localFile.childImageSharp.gatsbyImageData}
              alt={nextPage.artykul.miniaturka.zdjecieDoMiniaturki.altText || ''}
              className="img"
            />
            <div className="copy">
              <h3>{nextPage.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: nextPage.excerpt }} className='p'></div>
              <span className="btn">Przczytaj</span>
            </div>
          </article>
        </Link>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(34px, ${48/7.68}vw, 64px);
  margin: clamp(64px, ${144/7.68}vw, 182px) 0;
  a {
    color: inherit;
    text-decoration: none;
    article {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 32px;
      .img {
        aspect-ratio: 3/3.5;
        max-width: 300px;
      }
      .copy {
        h3 {
          font-size: clamp(${18/16}rem, ${24/7.68}vw, ${28/16}rem);
          margin-bottom: 16px;
        }
        .p {
          font-size: clamp(${14/16}rem, ${15/7.68}vw, ${18/16}rem);
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 32px;
        }
        .btn {
          display: block;
          padding: 28px 34px;
          text-align: center;
          text-transform: uppercase;
          font-weight: 600;
          width: 100%;
          border: 1px solid #000;
          border-radius: 45px;
          transition: color .3s, background-color .3s;
        }
      }
    }
    &:hover {
      .btn {
        background-color: #000;
        color: #fff;
      }
    }
  }
  @media (max-width: 1049px){
     a {
      article {
        grid-template-columns: 1fr;
        .img {
          max-width: 100%;
        }
      }
    }
  }
  @media (max-width: 569px){
    grid-template-columns: 1fr;
    gap: 88px;
  }
  .arrow {
    display: flex;
    width: fit-content;
    gap: 34px;
    align-items: center;
    font-size: clamp(${22/16}rem, ${28/7.68}vw, ${34/16}rem);
    margin-bottom: clamp(24px, ${48/7.68}vw, 64px);
    svg {
      width: 34px;
      height: 34px;
    }
    span {
      transition: transform .3s;
    }
  }
  .prevPage:hover {
    .arrow span {
      transform: translateX(-21px);
    }
  }
  .nextPage:hover {
    .arrow span {
      transform: translateX(21px);
    }
  }
  .nextPage {
    .arrow {
      margin-left: auto;
    }
  }
`

export default MoreArticles;