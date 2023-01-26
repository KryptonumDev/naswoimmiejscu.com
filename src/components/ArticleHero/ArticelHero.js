import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const Hero = ({ title, categories, headings, data: { description, tekstDoZdjecia: annotation, zdjecieWyrozniajaceNaPodstronieArt: image } }) => {
    return (
        <Wrapper>
            <TextPart>
                <Categories>
                    {categories.map(el => (
                        <div className="item">{el.name}</div>
                    ))}
                </Categories>
                <h1>{title}</h1>
                <div className="description" dangerouslySetInnerHTML={{ __html: description }} />
                <div className="svg-flex">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="11" fill="#0BC76D" />
                    </svg>

                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="11" fill="#0BC76D" />
                    </svg>
                </div>
            </TextPart>
            <ImageWrapper>
                <svg className="svg-brown" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="15" cy="15.5" rx="15" ry="15.5" fill="#BBA383" />
                </svg>
                <svg className="svg" width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="49.5" cy="49.5" r="49.5" fill="#0BC76D" />
                </svg>
                <GatsbyImage image={image.localFile.childImageSharp.gatsbyImageData} alt={image.altText} />
                <div className="annotation" dangerouslySetInnerHTML={{ __html: annotation }} />
            </ImageWrapper>
            {headings.length > 1 && (
                <Nav>
                    <ul>
                        {headings?.map((heading) => (
                            <li key={heading.id}>
                                <a href={`#${heading.id}`}>{heading.title}</a>
                                {heading.items.length > 0 && (
                                    <ul>
                                        {heading.items.map((child) => (
                                            <li key={child.id}>
                                                <a href={`#${child.id}`}>{child.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </Nav>
            )}
            <div className="svg-flex-mobile">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#0BC76D" />
                </svg>

                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#0BC76D" />
                </svg>
            </div>
        </Wrapper>
    )
}

export default Hero

const Wrapper = styled.div`
    margin-top: clamp(120px, ${160 / 1920 * 100}vw, 160px);
    width: fit-content;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas: 
    'left top'
    'left bottom';
    grid-gap: 100px;

    .svg-flex-mobile{
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
        grid-template-columns: 1fr;
        margin: 60px auto 0 auto;
        max-width: 650px;

        .svg-flex-mobile{
            display: flex;
            gap: 12px;
        }
    }

`

const TextPart = styled.div`
    max-width: 772px;
    grid-area: left;

    h1{
        margin-top: 16px;
        font-weight: 700;
        font-size: clamp(28px, ${64 / 1920 * 100}vw, 64px);
        line-height: 110%;

        @media (max-width: 640px) {
            font-size: 22px;
        }

    }

    .description{
        margin-top: 16px;
        *{
        font-size: clamp(15px, ${26 / 1920 * 100}vw, 26px);
        line-height: 130%;
        }
        & > * + *{
            margin-top: 16px;
        }
    }

    .svg-flex{
        display: flex;
        gap: 12px;
        margin-top: clamp(32px, ${48 / 1920 * 100}vw, 48px);

        @media (max-width: 820px) {
            display: none;
        }

    }
`

const Categories = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    .item{
        padding: 12px 30px;
        border: 1px solid #000000;
        border-radius: 45px;
        font-weight: 300;
        font-size: clamp(7px, ${7 / 360 * 100}vw, 14px);
        line-height: 16px;
        text-transform: uppercase;

        @media (max-width: 1024px) {
            font-size: clamp(7px, ${7 / 360 * 100}vw, 12px);
            padding: 8px 20px;
        }

        @media (max-width: 640px){
            font-size: clamp(7px, ${12 / 640 * 100}vw, 12px);
        }

        @media (max-width: 480px){
            padding: 6px 15px;
        }
    }
`

const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    grid-area: top;

    width: clamp(500px, ${650 / 1920 * 100}vw, 650px);

    .svg-brown{
        display: none;
    }

    @media (max-width: 1024px) {
        width: 400px;

        .svg{
            width: 60px;
            height: 60px;
        }
    }

    @media (max-width: 820px){
        width: auto;
        margin: 0 auto;
        display: block;
        max-width: 650px;

        .svg-brown{
            display: block;
            position: absolute;
            left: -15px;
            top: -15px;
            width: 30px;
            z-index: 2;
            height: 30px;
        }
    }

    .svg{
        position: absolute;
        right: 75px;
        top: 50px;
        z-index: 2;

        @media (max-width: 820px){
            top: unset;
            bottom: -25px;
            right: -50px;
            width: 100px;
            height: 100px;
        }
    }

    .annotation{
        writing-mode: vertical-lr;
        text-orientation: mixed;
        font-weight: 500;
        font-size: 12px;
        line-height: 24px;

        height: fit-content;
        transform: rotateX(180deg) rotateY(180deg);
        margin-top: auto;

        @media (max-width: 820px){
            writing-mode: unset;
            text-orientation: unset;
            transform: unset;
            padding-right: 50px;
        }

        @media (max-width: 640px){
            font-size: clamp(7px, ${12 / 640 * 100}vw, 12px);
        }
    }
`

const Nav = styled.nav`
    font-weight: 500;
    font-size: clamp(22px, ${26 / 1920 * 100}vw, 26px);
    line-height: 35px;
    margin-top: clamp(24px, ${48 / 1920 * 100}vw, 48px);
    grid-area: bottom;

    @media (max-width: 1024px) {
        font-size: 18px;
    }

    @media (max-width: 820px){
        margin-top: 0;
        font-size: clamp(11px, ${18 / 820 * 100}vw, 18px);
    }



    a{
        color: #000;
        text-decoration: unset;
        font-variant-numeric: normal;
    }

    ul{
        display: grid;
        grid-gap: 16px;

        li{
            list-style: inside decimal !important;

            li{
                list-style: initial !important;
            }
        }

        ul{
            margin-top: 16px;
        }

        ol{

        }

        a{
            padding: 4px 0;
            position: relative;
        }
    }

    .sub{
        margin-left: 24px;
    }

    ol{
        margin-left: 48px;
    }
    `