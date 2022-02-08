import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`${css`
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: "Ubuntu", sans-serif;
  }
  body {
    margin: 0 auto;
  }
`}`;

export default GlobalStyle;
