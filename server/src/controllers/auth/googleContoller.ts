import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const loginGoogle = async (req: Request, res: Response) => {
  console.log(jwt);
};

// Implement other controller functions for comment operations

const register = async (req: Request, res: Response) => {
  // Handle the registration logic here
};

const logoutGoogle = async (req: Request, res: Response) => {
  // Handle the logout logic here
};

export default {
  loginGoogle,
  register,
  logoutGoogle
  // Export other functions for comment operations
};
