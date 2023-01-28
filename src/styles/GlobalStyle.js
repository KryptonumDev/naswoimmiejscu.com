import { createGlobalStyle } from "styled-components";
import "./fonts.css";
import "./normalize.css";

const GlobalStyle = createGlobalStyle`
    html{
        --normalGreen: #0BC76D;
        --hoverGreen: #0FB264;
        --activeGreen: #0D9E59;
        --focusGreen: #0FB364;
        --disabledGreen: #C3CEC9;
        --buttonWhiteNormal: #EDEDED;
        --buttonBrownHover: #745239;
        --buttonBrownActive: #593922;
        --normalBlur: #FFFBEF;
        --nromalBrown: #6C5F4D;
        --normalGrey: #606164;
        --normalWhite: #ffffff; 
        --normalBlack: #000000;
        --btnGrey: #D9D9D9;
        --recomendationSecond: #F6F2E1;
        --arrowBlack: #203533;
        --errorColor: #7C0C0C;
        --hrColor: #EBE2D3;
        --grey: #E3E1DA;
        --lightGreen: #9FF86F;
        --paginationNormal: #BBA383;
        --hoverGrey: #E2E2E2;
        --womensBox: #EDEBE0;
        overflow-x: hidden;
        scroll-behavior: smooth;
    } 

    .tl-wrapper{
      opacity: 0 !important;
      transition: opacity .2s cubic-bezier(0.455, 0.03, 0.515, 0.955) !important;
    }

    .tl-wrapper-status--entering{
      opacity: 1 !important;
    }

    .tl-wrapper-status--entered{
      opacity: 1 !important;
    }

    .tl-wrapper-status--exiting{
      transition: opacity .2s cubic-bezier(0.455, 0.03, 0.515, 0.955) !important;
      opacity: 0 !important;
    }

    #gatsby-focus-wrapper{
      overflow: hidden;
      position: relative;
    }

    .transitionLink{
      text-decoration: none;
    }

    body {
      overflow-x: hidden;
      width: 100%;
      background-color: var(--normalBlur);
    }

    .wp-block-button__link{
      background-color: var(--normalGreen) !important;
      border: 1px solid transparent;
      width: clamp(277px, 18.490vw,355px);
      border-radius: 64px;
      min-height: clamp(73px, 4.583vw, 88px);
      transition: background-color 300ms, color 300ms, border 300ms;
      cursor: pointer;
      text-transform: uppercase;
      font: 700 20px Roboto !important;
      display: flex !important;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: var(--normalBlack) !important;
      text-align: center;
      padding: 0 !important;

      &:hover {
        background-color: var(--hoverGreen) !important;
        border: 1px solid transparent;
      }

      &:focus-visible {
        outline-width: 1px;
        outline-style: solid;
        outline-color: var(--hoverGreen) !important;
        outline-offset: 4px;
      }
    }
    
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      font-variant-numeric: oldstyle-nums;
      font-family: 'Roboto';
      scroll-padding-top: 40px;
    }

    *:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 4px;
    }

    *:focus {
      outline: none
    }

    p {
      font-variant-numeric: oldstyle-nums;
    }

    *::before,
    *::after{
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
