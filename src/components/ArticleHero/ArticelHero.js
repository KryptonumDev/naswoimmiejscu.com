/** @format */

import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { smoothScroll } from '../../utils/smoothScroll'

const Hero = ({
  title,
  categories,
  headings,
  data: {
    description,
    tekstDoZdjecia: annotation,
    zdjecieWyrozniajaceNaPodstronieArt: image
  }
}) => {
  return (
    <Wrapper>
      <TextPart>
        <Categories>
          {categories.map((el) => (
            <Link to={`/blog/${el.slug}`} className='item' key={el.name}>
              {el.name}
            </Link>
          ))}
        </Categories>
        <h1>{title}</h1>
        <div
          className='description'
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className='svg-flex'>
          <svg
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <circle cx='11' cy='11' r='11' fill='#0BC76D' />
          </svg>

          <svg
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <circle cx='11' cy='11' r='11' fill='#0BC76D' />
          </svg>
        </div>
      </TextPart>
      <ImageWrapper>
        <svg
          className='svg-brown'
          width='30'
          height='31'
          viewBox='0 0 30 31'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <ellipse cx='15' cy='15.5' rx='15' ry='15.5' fill='#BBA383' />
        </svg>
        <svg
          className='svg'
          width='99'
          height='99'
          viewBox='0 0 99 99'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <circle cx='49.5' cy='49.5' r='49.5' fill='#0BC76D' />
        </svg>
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.altText}
        />
        <div
          className='annotation'
          dangerouslySetInnerHTML={{ __html: annotation }}
        />
      </ImageWrapper>
      {headings.length > 1 && (
        <Nav>
          <ul>
            {headings?.map((heading) => (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => smoothScroll(e)}
                >{heading.title}</a>
                {heading.items.length > 0 && (
                  <ul>
                    {heading.items.map((child) => (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          onClick={(e) => smoothScroll(e)}
                        >{child.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Nav>
      )}
      <div className='svg-flex-mobile'>
        <svg
          width='22'
          height='22'
          viewBox='0 0 22 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <circle cx='11' cy='11' r='11' fill='#0BC76D' />
        </svg>

        <svg
          width='22'
          height='22'
          viewBox='0 0 22 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <circle cx='11' cy='11' r='11' fill='#0BC76D' />
        </svg>
      </div>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  margin-top: clamp(60px, ${(160 / 1920) * 100}vw, 160px);
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    'left top'
    'left bottom';
  grid-gap: 0 100px;

  .svg-flex-mobile {
    display: none;
  }

  @media (max-width: 1100px) {
    grid-gap: 32px;
  }

  @media (max-width: 820px) {
    grid-template-areas:
      'top'
      'left'
      'bottom';
    grid-gap: 26px;
    grid-template-columns: 1fr;
    margin: 20px auto 0 auto;
    max-width: 650px;

    .svg-flex-mobile {
      display: flex;
      gap: 12px;
    }
  }
`

const TextPart = styled.div`
  max-width: 772px;
  grid-area: left;

  h1 {
    margin-top: 16px;
    font-weight: 700;
    font-size: clamp(28px, ${(64 / 1920) * 100}vw, 64px);
    line-height: 125%;

    @media (max-width: 640px) {
      font-size: 22px;
    }
  }

  .description {
    margin-top: 16px;
    max-width: 772px;

    * {
      font-size: clamp(15px, ${(26 / 1920) * 100}vw, 26px);
      line-height: 130%;
    }

    & > * + * {
      margin-top: 16px;
    }
  }

  .svg-flex {
    display: flex;
    gap: 12px;
    margin-top: clamp(32px, ${(48 / 1920) * 100}vw, 48px);

    @media (max-width: 820px) {
      display: none;
    }
  }
`

const Categories = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  .item {
    padding: 12px 30px;
    border: 1px solid #000000;
    border-radius: 45px;
    font-weight: 300;
    font-size: clamp(10px, ${(12 / 360) * 100}vw, 15px);
    line-height: 1.35em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--normalBlack);
    @media (max-width: 1024px) {
      font-size: clamp(10px, ${(10 / 360) * 100}vw, 12px);
      padding: 8px 20px;
    }

    @media (max-width: 640px) {
      font-size: clamp(10px, ${(12 / 640) * 100}vw, 12px);
    }

    @media (max-width: 480px) {
      padding: 6px 15px;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;
  grid-area: top;

  width: clamp(500px, ${(650 / 1920) * 100}vw, 650px);

  .svg-brown {
    display: none;
  }

  @media (max-width: 1024px) {
    width: 400px;

    .svg {
      width: 60px;
      height: 60px;
    }
  }

  @media (max-width: 820px) {
    width: auto;
    margin: 0 auto;
    display: block;
    max-width: 650px;

    .svg-brown {
      display: block;
      position: absolute;
      left: -15px;
      top: -15px;
      width: 30px;
      z-index: 2;
      height: 30px;
    }
  }

  .svg {
    position: absolute;
    right: -30px;
    top: -25px;

    @media (max-width: 820px) {
      top: unset;
      bottom: -25px;
      right: -50px;
      width: 100px;
      height: 100px;
    }
  }

  .annotation {
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;

    @media (max-width: 820px) {
      padding-right: 50px;
      marign-top: 12px;
      line-height: 1.35em;
    }

    @media (max-width: 640px) {
      font-size: clamp(11px, ${(13 / 640) * 100}vw, 14px);
    }
  }
`

const Nav = styled.nav`
  width: clamp(500px, 33.85416666666667vw, 650px);
  font-weight: 500;
  font-size: clamp(17px, ${(26 / 1920) * 100}vw, 26px);
  margin-top: clamp(24px, ${(48 / 1920) * 100}vw, 48px);
  grid-area: bottom;

  @media (max-width: 1024px) {
    font-size: 17px;
    width: 400px;
    margin-top: 0;

    ul {
      grid-gap: 6px !important;
    }
  }

  @media (max-width: 820px) {
    font-size: clamp(16px, ${(18 / 820) * 100}vw, 18px);
    width: unset;
    max-width: 500px;
  }

  a {
    color: #000;
    text-decoration: unset;
    font-variant-numeric: normal;
    display: inline-block;
    transition: transform 0.3s ease-out;
    :hover {
      transform: translateX(4px);
    }
  }

  ul {
    display: grid;
    grid-gap: 10px;
    list-style-type: none;
    counter-reset: item;
    padding-bottom: 12px;

    li {
      list-style-type: none;
      counter-increment: item;

      &:before {
        content: counters(item, '.') '. ';
      }

      ul {
        padding-top: 4px;
        grid-gap: 4px;
      }

      li {

        @media (max-width: 820px) {
          font-size: clamp(14px, ${(18 / 820) * 100}vw, 18px);
        }
      }
    }

    ul {
      font-size: 1rem;
      margin: 4px 0 4px 24px;
    }

    a {
      padding: 4px 0;
      position: relative;
    }
  }

  .sub {
    margin-left: 24px;
  }

  ol {
    margin-left: 48px;
  }
`
