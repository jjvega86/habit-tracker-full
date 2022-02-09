import styled from "styled-components";

const buttonVariants = {
  done: `background-color: green`,
  missed: `background-color: yellow`,
  delete: `background-color: red`,
  add: `background-color: violet; padding: 1rem`,
};

export const Button = styled.button`
  ${({ buttonType }) => buttonVariants[buttonType]};
`;
