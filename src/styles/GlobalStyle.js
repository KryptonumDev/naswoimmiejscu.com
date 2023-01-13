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
        --arrowBlack: #203533;
        overflow-x: hidden;
    }

    body {
      overflow-x: hidden;
      width: 100%;
      background-color: var(--normalBlur);
    }
    
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      font-variant-numeric: oldstyle-nums;
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