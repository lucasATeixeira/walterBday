import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
    overflow: hidden
  }
  html, body, #root {
    width: 100%;
    height: 100%;
    background: pink
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column
  }
`;

export default GlobalStyle;
