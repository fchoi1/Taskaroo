import { Request, Response } from 'express';

export const setSessionUser = (
  req: Request,
  user: { email: string; id: string; username: string }
) => {
  req.session.user = user;
  req.session.loggedIn = true;
};

export const clearSessionUser = (req: Request, res: Response) => {
  // Handle the logout logic here
  if (req.session.loggedIn) {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        res.status(500);
      } else {
        res.status(200).json({ message: 'Current Session deleted' });
      }
    });
  } else {
    res.status(404).json({ message: 'Session not found' });
  }
};
