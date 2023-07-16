import type { Request, Response } from 'express';
import { promisify } from 'util';
import AuthService from '../service/AuthService';
import UserService from '../service/UserService';
import { clearSessionUser, setSessionUser } from '../utils/authUtils';

const userService = new UserService();
const authService = new AuthService();

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { isAuthenticated, user } = await authService.authenticateUser(email, password);

    if (isAuthenticated) {
      if (!user) res.status(403).json({ error: 'User not found' });

      const { email, id, nick } = user;
      setSessionUser(req, { email, id, username: nick });

      res.json({ message: 'Login successful', user });
      res.status(200);
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during login:' + error.message });
  }
};

const register = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    await userService.createUser({ email, password, firstName, lastName });
    res.json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during registration: ' + error.message });
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    clearSessionUser(req, res);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during logout: ' + error.message });
  }
};

const updateSession = async (req: Request, res: Response) => {
  const { sessionToken } = req.params;
  const { email, id, username } = req.body;

  const setSessionAsync = promisify(req.sessionStore.set);
  const saveSessionAsync = promisify(req.session.save);

  try {
    if (sessionToken) {
      const { loggedIn, cookie } = req.body;
      await setSessionAsync(sessionToken, { cookie, loggedIn, user: { email, id, username } });
    } else {
      setSessionUser(req, { email, id, username });
      await saveSessionAsync();
      res.sendStatus(201);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create session: ' + error.message });
  }
};

const getSession = async (req: Request, res: Response) => {
  try {
    const { sessionToken } = req.params;

    let sessionData: {
      loggedIn?: boolean;
      user?: { email?: string; id?: string; username?: string };
    };

    if (sessionToken) {
      const getSessionAsync = promisify(req.sessionStore.get);
      sessionData = await getSessionAsync(sessionToken);
    } else {
      sessionData = req.session;
    }

    if (!sessionData) {
      return res.status(404).json({ error: 'Session not found' });
    }

    res.status(200).json(sessionData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get session and user: ' + error.message });
  }
};

const deleteSession = async (req: Request, res: Response) => {
  try {
    const { sessionToken } = req.params;

    if (sessionToken) {
      const destroySessionAsync = promisify(req.sessionStore.destroy);
      await destroySessionAsync(sessionToken);
      res.json({ message: 'Session deleted successfully' });
    } else {
      return clearSessionUser(req, res);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete session:' + error.message });
  }
};

const linkAccount = async (req: Request, res: Response) => {};

const unlinkAccount = async (req: Request, res: Response) => {};

export default {
  login,
  register,
  logout,
  getSession,
  updateSession,
  deleteSession
  // Export other functions for comment operations
};
