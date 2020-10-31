import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import SessionContext from './contexts/SessionContext';

import Container from './components/Container/Container';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [basket, setBasket] = useState([]);
  return (
    <SessionContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
        basket,
        setBasket,
      }}
    >
      <Container>
        <Header />
        <Content />
        <Footer />
      </Container>
    </SessionContext.Provider>
  );
}

export default App;
