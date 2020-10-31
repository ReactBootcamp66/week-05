import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;

  width: 100%;
  height: 70px;
  padding: 4em;

  background-color: #a00b42;
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
  color: #fff;
`;
