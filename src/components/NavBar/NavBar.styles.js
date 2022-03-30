import styled from "styled-components";

export const Nav = styled.div`
  background: steelblue;
  box-shadow: 4px 2px 5px gray;
  color: white;
  margin-bottom: 2rem;
  padding: 1.5rem 2rem;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

export const ListItem = styled.li`
  font-size: 1.25rem;
`;

export const NavButton = styled.button`
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 0.4rem 0.5rem;

  &:hover {
    background: white;
    color: steelblue;
    cursor: pointer;
  }
`;

export const Brand = styled.li`
  cursor: pointer;
  font-size: 2rem;
`;
