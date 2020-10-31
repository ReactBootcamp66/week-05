import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../config/Router';

import { Wrapper, Title, Menu } from './Header.styles';

const Header = (props) => {
  return (
    <Wrapper>
      <Title>Tepsiburada</Title>
      <Menu>
        {routes
          .filter((route) => !!route.isLink)
          .map((route) => (
            <li>
              <Link to={route.path}>{route.title}</Link>
            </li>
          ))}
      </Menu>
    </Wrapper>
  );
};

export default Header;
