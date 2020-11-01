import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5em 4em;

  background-color: #a00b42;
`;

export const InlineContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.ul`
  list-style-type: none;

  & > li {
    display: inline;
  }

  & > li a {
    padding: 0 20px 0 0;

    color: #fff;
  }
`;

export const Title = styled.h1`
  margin: 0;

  color: #fff;
`;
