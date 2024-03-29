/** @format */

import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Container from '../Container/Container'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import Button from '../Button/Button'
import { StyledText } from '../Text/StyledText'
import Hero from '../ArticleHero/ArticelHero'
import Wrapper from '../PageWrapper/PageWrapper'

import './../../styles/wp.min.css'
import MoreArticles from '../MoreArticles'

export const slugify = (string) => {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;',
    b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------',
    p = new RegExp(a.split('').join('|'), 'g');
  return string.toString().toLowerCase().replace(/\s+/g, '-').replace(p, c => b.charAt(a.indexOf(c))).replace(/&/g, '-i-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
}

const getNestedHeadings = (headingElements) => {
  const nestedHeadings = []

  headingElements.forEach((heading, index) => {
    const { innerText: title } = heading
    let id = slugify(title)
    heading.id = id

    if (title === 'Problem' || title === 'Solution' || title === 'Result') {
      return null
    }

    if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, title, items: [], pseudo: false })
    } else if (
      heading.nodeName === 'H3' &&
      nestedHeadings.length > 0 &&
      !nestedHeadings[nestedHeadings.length - 1].pseudo
    ) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
        pseudo: false
      })
    } else if (heading.nodeName === 'H3') {
      nestedHeadings.push({ id, title, items: [], pseudo: true })
    }
  })

  return nestedHeadings
}

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([])

  useEffect(() => {
    const headingElements = Array.from(
      document.getElementById('post-content').querySelectorAll('h2, h3')
    )

    const newNestedHeadings = getNestedHeadings(headingElements)
    setNestedHeadings(newNestedHeadings)
  }, [])

  return { nestedHeadings }
}

const ArticleTemplate = ({
  pageContext: { prevPage, nextPage },
  data: {
    wpPost: { title, categories, artykul, content },
    global: {
      globalComponets: { contactSection }
    }
  }
}) => {
  const { nestedHeadings } = useHeadingsData()
  return (
    <Wrapper>
      <Container>
        <Hero
          headings={nestedHeadings}
          title={title}
          categories={categories.nodes}
          data={artykul.trescArtykulu}
        />
        <Content
          id='post-content'
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <MoreArticles prevPage={prevPage} nextPage={nextPage} />
        <Contact>
          <div>
            <div
              className='title'
              dangerouslySetInnerHTML={{ __html: contactSection.title }}
            />
            <div
              className='text'
              dangerouslySetInnerHTML={{ __html: contactSection.text }}
            />
            <StyledText />
            <Button
              className='link'
              hasfontsize={`clamp(16px, ${(20 / 1920) * 100}vw, 20px)`}
              btnData={contactSection.link}
              ariaLabel='link'
            />
          </div>
          <ImageWrapper>
            <svg
              className='svg'
              width='99'
              height='99'
              viewBox='0 0 99 99'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <circle cx='49.5' cy='49.5' r='49.5' fill='#745239' />
            </svg>
            <GatsbyImage
              image={
                contactSection.image.localFile.childImageSharp.gatsbyImageData
              }
              alt={contactSection.image.altText}
            />
          </ImageWrapper>
        </Contact>
        <Circle
          width='721'
          height='721'
          viewBox='0 0 721 721'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <circle
            cx='360.5'
            cy='360.5'
            r='333'
            stroke='#0BC76D'
            strokeWidth='55'
          />
        </Circle>
        <SecondCircle
          width='721'
          height='721'
          viewBox='0 0 721 721'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <circle
            cx='360.5'
            cy='360.5'
            r='333'
            stroke='#0BC76D'
            strokeWidth='55'
          />
        </SecondCircle>
      </Container>
    </Wrapper>
  )
}

export default ArticleTemplate

export { Head } from '../Head/Head'

export const query = graphql`
  query wpPostQuery($postId: String) {
    global: wpPage(id: { eq: "cG9zdDo2NDU=" }) {
      globalComponets {
        contactSection {
          title
          text
          link {
            title
            url
          }
          image {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    wpPost(id: { eq: $postId }) {
      title
      content
      seo {
        canonical
        metaDesc
        opengraphSiteName
        title
        opengraphUrl
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
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
        trescArtykulu {
          description
          tekstDoZdjecia
          zdjecieWyrozniajaceNaPodstronieArt {
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
      categories {
        nodes {
          name
          slug
        }
      }
      content
    }
  }
`

const Circle = styled.svg`
  position: absolute;
  right: -370px;
  bottom: -130px;

  @media (max-width: 1880px) {
    width: 600px;
    height: 600px;
  }
  @media (max-width: 1440px) {
    right: -450px;
    bottom: -180px;
  }
  @media (max-width: 1180px) {
    display: none;
  }
`

const SecondCircle = styled.svg`
  position: absolute;
  left: -370px;
  bottom: 40%;
  z-index: -1;
  @media (max-width: 1440px) {
    bottom: 30%;
  }
  @media (max-width: 1180px) {
    display: none;
  }
`

const Content = styled.div`
  margin-top: clamp(5rem, 6vw, 8rem);

  .wp-block-column li {
    line-height: 1em;
  }

  ul + p,
  ol + p {
    padding-top: 6px;
  }

  @media (max-width: 820px) {
    max-width: 650px;
    margin: clamp(24px, 3.125vw, 60px) auto 0 auto;
  }

  h2 {
    margin-bottom: 32px;
    font: 700 clamp(22px, ${(48 / 1920) * 100}vw, 48px) / 1.33em Roboto;

    @media (max-width: 820px) {
      font-size: 22px;
      margin-bottom: 16px;
    }
  }

  h3 {
    font: 700 clamp(20px, 1.458vw, 28px) Roboto;
  }

  p {
    font-weight: 300;
    font-size: clamp(15px, ${(26 / 1920) * 100}vw, 26px);
    line-height: 130%;
  }

  .wp-block-column {
    max-width: 772px;

    & > * + * {
      margin-top: 16px;
    }
  }

  @media only screen and (max-width: 820px) {
    .wp-block-columns.mobile-reversed {
      display: flex;
      flex-direction: column-reverse;
    }
    .wp-block-columns:has(.wp-block-column):nth-child(2):has(figure) {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  .wp-block-quote {
    margin-top: 28px;
    margin-bottom: 1rem;

    > p {
      margin-bottom: calc(1rem - 4px);
    }
  }

  .wp-block-button__link {
    margin-top: 24px;

    @media (max-width: 820px) {
      margin-top: 0;
    }

    @media (max-width: 360px) {
      width: 100% !important;
      font-size: 11px !important;
      min-height: 53px;
    }
  }

  .wp-block-button {
    @media (max-width: 360px) {
      display: block !important;
    }
  }

  .wp-block-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 64px;

    + .wp-block-columns {
      margin-top: clamp(5rem, 6.52vw, 9rem);
      @media (max-width: 820px) {
        margin-top: clamp(2rem, 3.5vw, 4rem);
      }
    }

    @media (max-width: 1024px) {
      grid-gap: 32px;
    }

    @media (max-width: 820px) {
      grid-template-columns: 1fr;
      grid-gap: 16px;
    }
  }

  .wp-block-image {
    margin: 0;
  }

  .size-full {
    width: 100%;
  }

  ul {
    font-size: clamp(15px, ${(26 / 1920) * 100}vw, 26px);
    margin: 0;
    padding: 0 0 8px 16px;
    display: grid;
    grid-gap: 10px;
    counter-reset: item;
    list-style-position: inside;

    li {
      font-weight: 500;
      font-size: clamp(17px, 1.3541666666666667vw, 26px);
      @media (max-width: 424px) {
        font-size: 15px;
      }
      line-height: 150%;
    }
  }

  a {
    text-transform: uppercase;
    font-size: 0.75em;
    text-decoration: none;
    color: var(--normalGrey);
    transition: color 250ms linear;
    line-height: 1.33em;

    &:hover {
      color: var(--normalBlack);
    }

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: var(--hoverGreen);
      outline-offset: 4px;
    }
  }
`

const Contact = styled.div`
  margin-top: clamp(120px, ${(160 / 1920) * 100}vw, 160px);
  margin-bottom: clamp(120px, ${(160 / 1920) * 100}vw, 160px);
  display: grid;
  grid-template-columns: 768fr 796fr;
  grid-gap: 64px;
  align-items: center;
  position: relative;

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 650px;
    margin: 60px auto;
  }

  @media (max-width: 360px) {
    .link {
      width: 100%;
      font-size: 13px;
      min-height: 53px;
    }
  }

  .title {
    margin-bottom: 20px;
    font: 700 clamp(22px, ${(48 / 1920) * 100}vw, 48px) / 1.33em Roboto;

    @media (max-width: 820px) {
      font-size: 22px;
    }
  }

  .text {
    font: 300 clamp(15px, ${(26 / 1920) * 100}vw, 26px) / 1.33em Roboto;
    margin-bottom: 30px;
    img {
      width: 28px;
      vertical-align: middle;
    }
    @media (max-width: 1200px) {
      font-size: 16px;
    }

    p + p {
      margin-top: 16px;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;

  .svg {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-50%, -50%);

    width: clamp(50px, ${(99 / 1920) * 100}vw, 99px);
    height: clamp(50px, ${(99 / 1920) * 100}vw, 99px);
    z-index: 2;
  }
`
