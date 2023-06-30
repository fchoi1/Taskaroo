import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const loginGoogle = async (req: Request, res: Response) => {
  console.log(jwt);
};

// Implement other controller functions for comment operations

export const register = (req: Request, res: Response) => {
  // Handle the registration logic here
};

export const logout = (req: Request, res: Response) => {
  // Handle the logout logic here
};

export default {
  loginGoogle
  // Export other functions for comment operations
};
