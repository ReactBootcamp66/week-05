import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li`
  padding: 2em;
  margin: 5px 0 0;

  border: 1px solid #d3d3d3;
  border-radius: 4px;

  cursor: pointer;
  outline: none;

  &:hover,
  &:active {
    border: 1px solid red;
  }
`;
