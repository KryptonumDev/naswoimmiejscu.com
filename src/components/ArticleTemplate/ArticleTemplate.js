import React from "react";
import { graphql } from "gatsby";
import Container from "../Container/Container";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "../Button/Button";
import { StyledText } from "../Text/StyledText";

const ArticleTemplate = ({ data: { wpPost: { content }, global: { globalComponets: { contactSection } } } }) => {
  return (
    <Container>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
      <Contact>
        <div>
          <div className="title" dangerouslySetInnerHTML={{ __html: contactSection.title }} />
          <div className="text" dangerouslySetInnerHTML={{ __html: contactSection.text }} /><StyledText />
          <Button className='link' hasfontsize={`clamp(16px, ${20 / 1920 * 100}vw, 20px)`} btnData={contactSection.link} />
        </div>
        <ImageWrapper>
          <svg className="svg" width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="49.5" cy="49.5" r="49.5" fill="#745239" />
          </svg>
          <GatsbyImage image={contactSection.image.localFile.childImageSharp.gatsbyImageData} alt={contactSection.image.altText} />
        </ImageWrapper>
      </Contact>
    </Container>
  )
};

export default ArticleTemplate;

export { Head } from "../Head/Head";

export const query = graphql`
  query wpPostQuery($postId: String) {
    global : wpPage(id: {eq: "cG9zdDo2NDU="}){
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
        }
      }
      content
    }
  }
`;

const Content = styled.div`

`

const Contact = styled.div`
  margin-top: 160px;
  display: grid;
  grid-template-columns: 768fr 796fr;
  grid-gap: 64px;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 30px;
  }

  @media (max-width: 360px) {
    .link{
      width: 100%;
      font-size: 11px;
      min-height: 53px;
    }
  }


  .title{
    margin-bottom: 20px;
    font:700 3.333vw/1.2em Roboto;

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }

  .text{
    font: 300 1.354vw/1.2em Roboto;
    margin-bottom: 30px;

    @media (max-width: 1200px) {
      font-size: 16px;
    }

    p+p{
      margin-top: 16px;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;

  .svg{
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-50%, -50%);

    width: clamp(50px, ${99 / 1920 * 100}vw, 99px);
    height: clamp(50px, ${99 / 1920 * 100}vw, 99px);
    z-index: 2;
  }
`
