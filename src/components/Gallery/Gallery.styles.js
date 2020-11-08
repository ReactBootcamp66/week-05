import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  flex-wrap: wrap;

  justify-content: space-between;
`;

export const CardWrapper = styled.div`
  width: 150px;
  min-height: 180px;

  border: 1px solid #d3d3d3;
  margin-bottom: 20px;
  box-shadow: 0 0 5px 5px #d3d3d3;

  cursor: pointer;
  outline: none;

  &:hover {
    border: 1px solid #a00b42;
  }
`;

export const CardContent = styled.div`
  padding: 0.25em 1em;
`;
