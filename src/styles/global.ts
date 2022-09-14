import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%; 
    }

    body {
        background-color: #fff1da;
        margin: 0 auto;
    }

    @font-face{
        font-family: "fontspring";
        font-display: swap;
        src: url(fonts/Fontspring-DEMO-annuario-regular.woff) format('woff');
    }

    @font-face {
        font-family: 'Glora Black';
        font-display: swap;
        src: url(fonts/Glora_black.woff) format('woff');
    }

    @font-face {
        font-family: 'Glora Regular';
        font-display: swap;
        src: url(fonts/Glora_Regular.woff) format('woff');
    }

    @font-face {
        font-family: 'Glora light';
        font-display: swap;
        src: url(fonts/Glora_light.woff) format('woff');
    }
`

export default GlobalStyles