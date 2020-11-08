import styled from 'styled-components';

export const TabButtons = styled.div`
  display: flex;
`;

export const TabButton = styled.button`
  margin-left: 10px;
  background: none;

  border: 1px solid ${(props) => (props.isActive ? 'red' : 'gray')};
  color: ${(props) => (props.isActive ? 'red' : 'black')};
`;

export const TabContent = styled.div`
  display: flex;
  padding: 2em;
  margin-top: 10px;

  border: 1px solid #d3d3d3;
`;
