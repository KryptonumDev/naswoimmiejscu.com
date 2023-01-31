/** @format */

import styled from "styled-components";

export const StyledCustomButton = styled.button`
    width: ${({ hasdeclaredwidth }) =>
        hasdeclaredwidth ? hasdeclaredwidth : "clamp(111px, 6.823vw, 131px)"};
    height: ${({ hasdeclaredheight }) =>
        hasdeclaredheight ? hasdeclaredheight : "clamp(91px, 5.885vw, 113px)"};
    border-radius: 50% 50% 50% 0;
    background-color: ${({ bgcolor }) =>
        bgcolor ? bgcolor : "var(--buttonBrownHover)"};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 450ms !important;
    transform: scale(${({ isfaq }) => (isfaq ? "1" : "0.7")});

    &.active {
        transform: scale(1) !important;
        background-color: var(--normalGreen) !important;
    }

    img {
        width: ${({ imagesize }) => (imagesize ? imagesize : "initial")};
        height: ${({ imageheight }) => (imageheight ? imageheight : "initial")};
    }

    .gatsby-image-wrapper {
        width: ${({ imagesize }) => (imagesize ? imagesize : "initial")};
        height: ${({ imageheight }) => (imageheight ? imageheight : "initial")};
    }

    svg {
        color: ${({ iconColor }) =>
            iconColor ? iconColor : "var(--normalWhite)"};
        width: ${({ imagesize }) => (imagesize ? imagesize : "initial")};
        height: ${({ imageheight }) => (imageheight ? imageheight : "initial")};
    }

    @media only screen and (max-width: 992px) {
        width: ${({ hasdeclaredwidth }) =>
            hasdeclaredwidth ? hasdeclaredwidth : "131px"};
        height: ${({ hasdeclaredheight }) =>
            hasdeclaredheight ? hasdeclaredheight : "113px"};
    }
`;
