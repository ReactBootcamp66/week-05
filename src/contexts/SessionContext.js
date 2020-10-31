import React from 'react';

const SessionContext = React.createContext({
  isAuthenticated: false,
  setAuthenticated: (authenticated) => {},

  basket: [], // product list
  setBasket: (newBasket) => {},
});

export default SessionContext;
