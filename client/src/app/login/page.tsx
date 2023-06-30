'use client';

import { NextPage } from 'next';
import React from 'react';

interface LoginPage {
  children: React.ReactNode;
  // Define the props interface here if needed
}

const LoginPage: NextPage<LoginPage> = ({ children }) => {
  console.log(children);

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default LoginPage;
