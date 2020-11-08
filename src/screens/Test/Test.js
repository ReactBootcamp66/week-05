import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import Products from '../../components/Products/Products';

const Test = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  console.log(process.env);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((reason) => {
        console.log(reason);
        setError('Empty array');
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  );
};

export default Test;
