import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html, body {
        font-family: sans-serif;

        width: 100%;
        max-width: 100vw;

        margin: 0 auto;

        background-color: #18171c;
    }

    button{
        cursor: pointer;
    }
`

export default GlobalStyle;