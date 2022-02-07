import styled from "styled-components";

const buttonVariants = {
  done: `background-color: green`,
  missed: `background-color: yellow`,
  delete: `background-color: red`,
};

export const Button = styled.button`
  ${({ buttonType }) => buttonVariants[buttonType]};
`;
