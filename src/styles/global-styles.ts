import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html, body {
        font-family: sans-serif;
        max-width: 100vw;
    }
`

export default GlobalStyle;