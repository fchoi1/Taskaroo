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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // Login successful, handle the response here
        console.log('Login successful');
      } else {
        // Login failed, handle the response here
        console.error('Login failed');
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('An error occurred during login:', error);
    }
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
