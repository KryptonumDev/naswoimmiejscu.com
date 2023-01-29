import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Container from "../Container/Container"
import { Link } from "../TransitionLink/TransitionLink"

export default function Opinie({ opinie }) {
    return (
        <>
            <Circle width="582" height="582" viewBox="0 0 582 582" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="291" cy="291" r="255" stroke="#0BC76D" strokeWidth="72" />
            </Circle>
            <Container>
                <Content>
                    <h1>Opinie</h1>
                    <Grid>
                        {opinie.map(el => (
                            <React.Fragment key={el.slug}>
                                <Link className="wrap" to={'/case/' + el.slug + '/'}>
                                    <Item>
                                        <InformFlex>
                                            <ImageWrapper>
                                                <GatsbyImage className="image" image={el.caseStudyArtykul.miniaturkaCaseStudy.avatar.localFile.childImageSharp.gatsbyImageData} alt={el.caseStudyArtykul.miniaturkaCaseStudy.avatar.altText} />
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="20" cy="20" r="20" fill="#0BC76D" />
                                                </svg>
                                            </ImageWrapper>
                                            <div>
                                                <p className="title">{el.caseStudyArtykul.miniaturkaCaseStudy.nazwaOsobyDoMiniaturki}</p>
                                                <div className="text" dangerouslySetInnerHTML={{ __html: el.caseStudyArtykul.miniaturkaCaseStudy.podpisPodIminiem }} />
                                            </div>
                                        </InformFlex>
                                        <Text dangerouslySetInnerHTML={{ __html: el.caseStudyArtykul.miniaturkaCaseStudy.opisDoMiniaturki }} />
                                    </Item>
                                </Link>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Content>
            </Container>
        </>
    )
}

const Circle = styled.svg`
    position: absolute;
    right: calc(373px - 582px);
    top: 190px;
    z-index: 2;

    @media (max-width: 1167px) {
        top: 100px;
        width: 350px;
        height: 350px;
    }

    @media (max-width: 992px) {
        display: none;
    }

`

const Content = styled.div`
    max-width: 1380px;
    margin: clamp(30px, ${90 / 1920 * 100}vw, 90px) auto 90px auto;

    h1{
        font-weight: 700;
        font-size: clamp(22px, ${22 / 480 * 100}vw, 64px);
        line-height: 110%;
    }

    @media (max-width: 480px) {
        margin: 30px  -22px 90px -22px;

        h1{
            margin: 0 22px;
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-gap: clamp(32px, ${32 / 1024 * 100}vw, 64px);
    margin-top: clamp(32px,  ${32 / 480 * 100}vw, 80px);

    .wrap{
        padding: 0 clamp(32px, ${32 / 1024 * 100}vw, 64px);
        &:nth-child(2n+1){
            padding: clamp(32px, ${32 / 1024 * 100}vw, 64px);
            background: #EAE7E1;
        }
        text-decoration: unset;
        color: unset;

        > div {
            > div {
                > div {
                    &:first-child {
                        svg {
                            transition: transform 250ms linear;
                        }
                    }
                }
            }
        }
        
        &:hover {
            > div {
                > div {
                    > div {
                        &:first-child {
                            svg {
                                transform: scale(1.10);
                            }
                        }
                    }
                }
            }
        }
    }
`

const Item = styled.div`
    display: flex;
    gap: clamp(32px, ${32 / 1024 * 100}vw, 64px);
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        display: grid;
    }

`

const ImageWrapper = styled.div`
    position: relative;
    width: clamp(91px, ${100 / 1024 * 100}vw, 130px);
    height: clamp(91px, ${100 / 1024 * 100}vw, 130px);

    .image{
        width: clamp(91px, ${100 / 1024 * 100}vw, 130px);
        height: clamp(91px, ${100 / 1024 * 100}vw, 130px);
        border-radius: 50%;
    }

    svg{
        position: absolute;
        right: 0;
        bottom: 0;
    }

    @media only screen and (max-width: 992px) {
        svg {
            width: 28px;
            height: 28px;
        }
    }
`

const InformFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
    min-width: clamp(280px, ${360 / 1024 * 100}vw, 420px);
    max-width: clamp(280px, ${360 / 1024 * 100}vw, 420px);

    @media (max-width: 768px) {
        max-width: 350px;
        min-width: unset;
        gap: 16px;
    }

    .title{
        margin-bottom: 4px;
        font-weight: 700;
        font-size: clamp(18px, ${18 / 1024 * 100}vw, 22px);
        line-height: 125%;
    }

    .text{
        font-weight: 400;
        font-size: clamp(14px, ${14 / 1024 * 100}vw, 18px);
        line-height: 110%;
        color: #606164;
    }
`

const Text = styled.div`
    max-width: 624px;
    width: 100%;
    padding-right: clamp(0, ${32 / 1024 * 100}vw, 64px);
    margin-left: auto;
    font-weight: 300;
    font-size: clamp(15px, ${18 / 1024 * 100}vw, 22px);
    line-height: 133%;
    position: relative;
    z-index: 3;

    @media (max-width: 768px) {
        padding-right: 0;
        max-width: 550px;
    }
`