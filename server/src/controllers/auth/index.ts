import type { Request, Response } from 'express';
import defaultController from './authController';
import googleContoller from './googleContoller';

const login = (req: Request, res: Response) => {
  if (req.body.authType === 'google') {
    googleContoller.loginGoogle(req, res);
  } else {
    defaultController.login(req, res);
  }
  console.log('jwt');
  res.json({ message: 'login successful' });
};

// Implement other controller functions for comment operations

const register = (req: Request, res: Response) => {
  // Handle the registration logic here
};

const logout = (req: Request, res: Response) => {
  // Handle the logout logic here
  console.log('logout');
  res.json();
};

export default {
  login,
  register,
  logout
  // Export other functions for comment operations
};
