import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`${css`
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

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

export default GlobalStyle;
