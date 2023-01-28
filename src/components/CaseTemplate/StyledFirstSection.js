/** @format */

import styled from "styled-components";

export const StyledFirstSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: clamp(80px, 6.198vw, 119px);
    margin-top: clamp(80px, 5.677vw, 109px);

    @media only screen and (max-width: 992px) {
        flex-direction: column-reverse;
        gap: 0;
        margin-top: 22px;
    }
`;

export const StyledTextWrapperFirst = styled.div`
    width: 50%;
    margin-top: 28px;
    position: relative;

    @media only screen and (max-width: 992px) {
        width: 100%;
        margin-top: 20px;
    }
`;

export const StyledImageFirstSection = styled.div`
    width: 50%;
    position: relative;
    max-height: 738px;
    display: flex;
    justify-content: flex-end;

    .gatsby-image-wrapper {
        height: 100%;
    }

    @media only screen and (max-width: 992px) {
        width: 80%;
        justify-content: flex-start;
    }

    @media only screen and (max-width: 653px) {
        width: 100%;
    }
`;

export const StyledTitle = styled.div`
    font: 700 3.333vw/1.2em Roboto;

    strong {
        color: var(--nromalBrown);
        font-weight: 700;
    }

    @media only screen and (min-width: 1920px) {
        font-size: 64px;
    }

    @media only screen and (max-width: 1763px) {
        font-size: 2.95vw;
    }

    @media only screen and (max-width: 1499px) {
        font-size: 2.802vw;
    }

    @media only screen and (max-width: 1349px) {
        font-size: 3.372vw;
    }

    @media only screen and (max-width: 992px) {
        font-size: 4.234vw;
    }

    @media only screen and (max-width: 528px) {
        font-size: 6.061vw;
    }

    @media only screen and (max-width: 360px) {
        font-size: 6.111vw;
    }
`;

export const StyledCircleWrapper = styled.div`
    position: absolute;
    bottom: -48px;
    right: -48px;
    z-index: 1;

    @media only screen and (max-width: 992px) {
        right: -20px;
        bottom: -20px;

        div {
            width: 40px;
            height: 40px;
        }
    }
`;

export const StyledGlobalWhiteCircle = styled.div`
    position: absolute;
    bottom: -70%;
    right: 54%;
    z-index: -1;
    width: 774px;
    height: 774px;

    svg {
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 992px) {
        display: none;
    }
`;

export const StyledDescFirst = styled.div`
    font: 300 1.615vw/1.2em Roboto;
    color: var(--normalBlack);
    margin: 30px 0 20px;

    &.second {
        max-width: 737px;
        margin-top: 26px;
    }

    strong {
        font-weight: 600;
    }

    @media only screen and (min-width: 1920px) {
        font-size: 31px;
    }

    @media only screen and (max-width: 1763px) {
        font-size: 1.448vw;
    }

    @media only screen and (max-width: 1499px) {
        font-size: 1.534vw;
    }

    @media only screen and (max-width: 1349px) {
        font-size: 1.834vw;
    }

    @media only screen and (max-width: 992px) {
        font-size: 2.218vw;
        margin-top: 20px;
    }

    @media only screen and (max-width: 808px) {
        font-size: 2.9vw;
    }

    @media only screen and (max-width: 528px) {
        font-size: 3.409vw;
    }

    @media only screen and (max-width: 360px) {
        font-size: 4.167vw;
        margin-top: 16px;
    }
`;

export const StyledSecondDesc = styled.div`
    font: 300 1.354vw/1.2em Roboto;
    color: var(--normalBlack);

    strong {
        font-weight: 600;
    }

    &.second {
        max-width: 737px;
    }

    @media only screen and (min-width: 1920px) {
        font-size: 26px;
    }

    @media only screen and (max-width: 1763px) {
        font-size: 1.248vw;
    }

    @media only screen and (max-width: 1499px) {
        font-size: 1.334vw;
    }

    @media only screen and (max-width: 1349px) {
        font-size: 1.734vw;
    }

    @media only screen and (max-width: 992px) {
        font-size: 2.218vw;
    }

    @media only screen and (max-width: 808px) {
        font-size: 2.9vw;
    }

    @media only screen and (max-width: 528px) {
        font-size: 3.409vw;
    }

    @media only screen and (max-width: 360px) {
        font-size: 4.167vw;
    }
`;

export const StyledCirclesWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: 20px;
`;

export const StyledSecondSection = styled.div`
    margin-top: clamp(40px, 6.146vw, 118px);
    width: 100%;
    gap: clamp(40px, 4.635vw, 89px);
    display: flex;
    justify-content: space-between;
    margin-bottom: clamp(120px, 8.906vw, 171px);

    @media only screen and (max-width: 992px) {
        flex-direction: column;
        gap: 0;
        margin-top: 20px;
        margin-bottom: 40px;
    }
`;

export const StyledLeftSecondWrapper = styled.div`
    width: 35%;
    max-width: 568px;
    height: 100%;
    
    @media only screen and (max-width: 992px) {
        width: 100%;
    }

    @media only screen and (max-width: 580px) {
        height: 219px;

        .gatsby-image-wrapper {
            height: 100%;
        }
    }
`;

export const StyledRightSecondWrapper = styled.div`
    width: 65%;
    position: relative;

    @media only screen and (max-width: 992px){
        width: 100%;
    }
`;

export const StyledIconsWrapper = styled.div`
    width: 100%;
    margin-top: 47px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media only screen and (max-width: 992px) {
        gap: 16px;
        margin-top: 22px;
    }
`;

export const StyledIconWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 22px;
`;

export const StyledIcon = styled.div`
    width: 80px;
    height: 80px;
    background-color: var(--normalGreen);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 992px) {
        width: 61px;
        height: 61px;

        img, svg {
            width: 35px;
            height: 35px;
        }
    }
`;

export const StyledTextWrapper = styled.div`
    width: calc(100% - 102px);
    margin-top: 8px;
    max-width: 786px;
`;

export const StyledName = styled.div`
    font: 700 clamp(18px, 1.354vw, 26px) Roboto;

    @media only screen and (max-width: 1763px) {
        font-size: 1.248vw;
    }

    @media only screen and (max-width: 1499px) {
        font-size: 1.334vw;
    }

    @media only screen and (max-width: 1349px) {
        font-size: 1.734vw;
    }

    @media only screen and (max-width: 992px) {
        font-size: 2.218vw;
    }

    @media only screen and (max-width: 808px) {
        font-size: 2.9vw;
    }

    @media only screen and (max-width: 528px) {
        font-size: 3.4vw;
    }

    @media only screen and (max-width: 360px) {
        font-size: 4.1vw;
    }
`;

export const StyledDesc = styled.div`
    font: 300 clamp(18px, 1.354vw, 26px) Roboto;

    @media only screen and (max-width: 1763px) {
        font-size: 1.248vw;
    }

    @media only screen and (max-width: 1499px) {
        font-size: 1.334vw;
    }

    @media only screen and (max-width: 1349px) {
        font-size: 1.734vw;
    }

    @media only screen and (max-width: 992px) {
        font-size: 2.218vw;
    }

    @media only screen and (max-width: 808px) {
        font-size: 2.9vw;
    }

    @media only screen and (max-width: 528px) {
        font-size: 3.4vw;
    }

    @media only screen and (max-width: 360px) {
        font-size: 4.1vw;
    }
`;

export const StyledGlobalSecondWhiteCircle = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
`;

export const StyledMobileCircle = styled.div`
    display: none;

    @media only screen and (max-width: 992px) {
        display: block;
        position: absolute;
        top: -15px;
        left: -15px;
        z-index: -1;
    }
`;
