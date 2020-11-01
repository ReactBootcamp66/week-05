import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button/Button';
import {
  Box,
  ErrorMessage,
  FormContainer,
  Title,
} from '../../components/FormElements/WrappedFormElements';
import Input from '../../components/Input/Input';

import SessionContext from '../../contexts/SessionContext';

const Login = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const { setAuthenticated } = useContext(SessionContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    if (username === 'admin' && password === 'admin') {
      setAuthenticated(true);
      history.push('/');
    } else {
      setError('Wrong username or password');
    }
  };

  return (
    <Box>
      <Title>Tepsiburada</Title>
      <FormContainer onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="off"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <Button type="submit" text="Login" />
      </FormContainer>
    </Box>
  );
};

export default Login;
