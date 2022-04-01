import styled from "styled-components";

const buttonVariants = {
  done: `color: green; border: 2px solid green; 
  &:hover {
    background: green;
    color: white;
    cursor: pointer;
  }`,
  missed: `color: orange; border: 2px solid orange;
   &:hover {
    background: orange;
    color: white;
    cursor: pointer;
  }`,
  delete: `color: red; border: 2px solid red;
  &:hover {
    background: red;
    color: white;
    cursor: pointer;
  }`,
  add: `color: lightblue; padding: 1rem; border: 2px solid lightblue;
  &:hover {
    background: lightblue;
    color: black;
    cursor: pointer;
  }`,
};

export const Button = styled.button`
  background: transparent;
  ${({ buttonType }) => buttonVariants[buttonType]};
  font-size: large;
  padding: 0.4rem 0.5rem;
`;
