import type { Request, Response } from 'express';
import defaultController from './authController';
import googleContoller from './googleContoller';

const getAuthController = (authType: string) => {
  switch (authType) {
    case 'google':
      return googleContoller;
    default:
      return defaultController;
  }
};

const login = (req: Request, res: Response) => {
  const authController = getAuthController(req.body?.authType);
  authController.login(req, res);
};

const register = (req: Request, res: Response) => {
  const authController = getAuthController(req.body?.authType);
  authController.register(req, res);
};

const logout = (req: Request, res: Response) => {
  const authController = getAuthController(req.body?.authType);
  authController.logout(req, res);
};

export default {
  login,
  register,
  logout
  // Export other functions for comment operations
};
