import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Container from "../Container/Container"

export default function Opinie({ opinie }) {
    return (
        <Container>
            <Content>
                <h1>Opinie</h1>
                <Grid>
                    {opinie.map(el => (
                        <Item>
                            <InformFlex>
                                <ImageWrapper>
                                    <GatsbyImage className="image" image={el.authorImage.localFile.childImageSharp.gatsbyImageData} alt={el.authorImage.altText} />
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="20" fill="#0BC76D" />
                                    </svg>
                                </ImageWrapper>
                                <div>
                                    <p className="title">{el.authorName}</p>
                                    <p className="text">{el.textUnderName}</p>
                                </div>
                            </InformFlex>
                            <Text dangerouslySetInnerHTML={{ __html: el.review }} />
                        </Item>
                    ))}
                </Grid>
            </Content>
        </Container>
    )
}

const Content = styled.div`
    max-width: 1380px;
    margin: clamp(30px, ${90 / 1920 * 100}vw, 90px) auto 90px auto;

    h1{
        font-weight: 700;
        font-size: clamp(22px, ${22 / 480 * 100}vw, 64px);
        line-height: 110%;
    }

    @media (max-width: 480px) {
        margin: 30px  -33px 90px -33px;

        h1{
            margin: 0 33px;
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-gap: clamp(32px, ${32 / 1024 * 100}vw, 64px);
    margin-top: clamp(32px,  ${32 / 480 * 100}vw, 80px);
`

const Item = styled.div`
    padding: 0 clamp(32px, ${32 / 1024 * 100}vw, 64px);
    display: flex;
    gap: clamp(32px, ${32 / 1024 * 100}vw, 64px);
    justify-content: space-between;
    align-items: center;

    &:nth-child(2n+1){
        padding: clamp(32px, ${32 / 1024 * 100}vw, 64px);
        background: #EAE7E1;
    }

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

    @media (max-width: 768px) {
        padding-right: 0;
        max-width: 550px;
    }
`