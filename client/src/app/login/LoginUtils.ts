import { NextApiRequest, NextApiResponse } from 'next';
import { FormEvent, RefObject } from 'react';

export const loginHandler = (req: NextApiRequest, res: NextApiResponse) => {
  // Validate user credentials

  // Attach cookies to the response
  res.setHeader('Set-Cookie', [
    `userId=${userId}; Max-Age=${maxAge}; HttpOnly; Path=/`
    // Add more cookies if needed
  ]);

  // Send a success response
  res.status(200).json({ message: 'Login successful' });
};

export default loginHandler;

export const handleLogin = async (
  e: FormEvent,
  emailRef: RefObject<HTMLInputElement>,
  passwordRef: RefObject<HTMLInputElement>,
  router: router,
) => {
  e.preventDefault();

  const email = emailRef.current as HTMLInputElement | null;
  const password = passwordRef.current as HTMLInputElement | null;

  const emailValue = email ? email.value.trim() : '';
  const passwordValue = password ? password.value.trim() : '';
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: emailValue, password: passwordValue })
    });

    console.log('login response: ', response);

    // Add Alerts
    if (response.ok) {
      // Login successful, handle the response here
      console.log('Login successful');
      router.push('/taskboard');
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
