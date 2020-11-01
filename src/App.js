import { useState } from 'react';
import './App.css';

import SessionContext from './contexts/SessionContext';
import CartContext from './contexts/CartContext';

import Container from './components/Container/Container';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [cart, updateCart] = useState([]);
  return (
    <SessionContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
      }}
    >
      <CartContext.Provider
        value={{
          cart,
          updateCart,
        }}
      >
        <Container>
          {isAuthenticated && <Header />}
          <Content />
          <Footer />
        </Container>
      </CartContext.Provider>
    </SessionContext.Provider>
  );
}

export default App;
