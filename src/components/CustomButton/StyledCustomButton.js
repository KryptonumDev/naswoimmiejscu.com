/** @format */

import styled from "styled-components";

export const StyledCustomButton = styled.button`
    width: ${({ hasdeclaredwidth }) =>
        hasdeclaredwidth ? hasdeclaredwidth : "clamp(111px, 6.823vw, 131px)"};
    height: ${({ hasdeclaredheight }) =>
        hasdeclaredheight ? hasdeclaredheight : "clamp(111px, 6.823vw, 131px)"};
    border-radius: 50% 50% 50% 0;
    background-color: ${({ bgcolor }) =>
        bgcolor ? bgcolor : "var(--buttonBrownHover)"};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 400ms !important;
    transform: scale(${({ isfaq }) => (isfaq ? "1" : "0.6")});

    &.active {
        transform: scale(1) !important;
        background-color: var(--normalGreen) !important;
    }

    img {
        width: ${({ imagesize }) => (imagesize ? imagesize : "initial")};
        height: ${({ imagesize }) => (imagesize ? imagesize : "initial")};
    }

    .gatsby-image-wrapper {
        width: ${({ imagesize }) => (imagesize ? imagesize : "initial")};
        height: ${({ imagesize }) => (imagesize ? imagesize : "initial")};
    }

    svg {
        color: ${({ iconColor }) =>
            iconColor ? iconColor : "var(--normalWhite)"};
    }

    @media only screen and (max-width: 992px) {
        width: ${({ hasdeclaredwidth }) =>
            hasdeclaredwidth ? hasdeclaredwidth : "131px"};
        height: ${({ hasdeclaredheight }) =>
            hasdeclaredheight ? hasdeclaredheight : "131px"};
    }
`;
