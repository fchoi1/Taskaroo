'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { ReactNode, useRef } from 'react';

import { Button, Form, Input, LoginContainer, Title } from './Login.styles';
import { handleLogin } from './LoginUtils';

interface LoginPage {
  children: ReactNode;
  // Define the props interface here if needed
}

const LoginPage: NextPage<LoginPage> = ({ children }) => {
  console.log(children);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const router = useRouter();

  const redirectSuccessfulLogin = () => {
    router.push('/taskboard');
  };

  return (
    <LoginContainer justify={'center'} align={'center'} flex={'column'}>
      <Title>Login</Title>
      <Form onSubmit={(e) => handleLogin(e, emailRef, passwordRef, redirectSuccessfulLogin)}>
        <Input type="email" placeholder="Email" ref={emailRef} />
        <Input type="password" placeholder="Password" ref={passwordRef} />
        <Button type="submit">Login</Button>
      </Form>
    </LoginContainer>
  );
};

export default LoginPage;
