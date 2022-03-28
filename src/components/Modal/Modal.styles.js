import styled from "styled-components";

export const ModalDiv = styled.div`
  width: clamp(25%, 400px, 90%);
  height: min(50%, 300px);
  color: white;
  background-color: gray;

  margin: auto;
  padding: 0 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
