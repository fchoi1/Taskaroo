'use client';

import { NextPage } from 'next';
import { FormEvent, ReactNode, useState } from 'react';

import { Button, Form, Input, LoginContainer, Title } from './Login.styles';

interface LoginPage {
  children: ReactNode;
  // Define the props interface here if needed
}

const LoginPage: NextPage<LoginPage> = ({ children }) => {
  console.log(children);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <LoginContainer justify={'center'} align={'center'} flex={'column'}>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </Form>
    </LoginContainer>
  );
};

export default LoginPage;
