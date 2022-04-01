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

export const Form = styled.form`
  display: flex;
  color: black;
  flex-direction: column;
  gap: 12px;
  width: 80%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  font-size: large;
`;

export const Button = styled.button`
  background: transparent;
  border: 2px solid steelblue;
  color: steelblue;
  font-size: large;
  padding: 0.4rem 0.5rem;

  &:hover {
    background: steelblue;
    color: white;
    cursor: pointer;
  }
`;

export default GlobalStyle;
