import type { Request, Response } from 'express';
import AuthService from '../service/AuthService';
import { NewAccount } from '../utils/Interfaces';

const authService = new AuthService();

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { isAuthenticated, user } = await authService.authenticateUser(email, password);

    if (isAuthenticated) {
      if (!user) res.status(403).json({ error: 'User not found' });

      res.json({ message: 'Login successful', user });
      res.status(200);
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during login:' + error.message });
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    console.log('logout');
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during logout: ' + error.message });
  }
};

const createSession = async (req: Request, res: Response) => {
  const { userId, expires, sessionToken, currentUser } = req.body;

  try {
    const session = await authService.createSession({ userId, expires, sessionToken }, currentUser);
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create session: ' + error.message });
  }
};

const updateSession = async (req: Request, res: Response) => {
  const { session, currentUser } = req.body;

  try {
    const updated = await authService.updateSession(session, currentUser);
    return updated ? res.status(201).json(updated) : res.status(404).json(null);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create session: ' + error.message });
  }
};

const getSession = async (req: Request, res: Response) => {
  const { sessionToken } = req.params;
  if (!sessionToken) return res.status(404).json(null);

  try {
    const { session, user } = await authService.getSession(sessionToken);

    if (!session) return res.status(404).json(null);

    res.status(200).json({ session, user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get session and user: ' + error.message });
  }
};

const deleteSession = async (req: Request, res: Response) => {
  try {
    const { sessionToken } = req.params;
    await authService.deleteSession(sessionToken);
    res.json({ sessionToken });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete session:' + error.message });
  }
};

const linkAccount = async (req: Request, res: Response) => {
  const {
    userId,
    type,
    provider,
    providerAccountId,
    refresh_token,
    access_token,
    expires_at,
    token_type,
    scope,
    id_token,
    session_state
  } = req.body.account;

  const currentUser = req.body.currentUser;

  const accountInfo: NewAccount = {
    userId,
    type,
    provider,
    providerAccountId,
    refresh_token,
    access_token,
    expires_at,
    token_type,
    scope,
    id_token,
    session_state
  };
  try {
    const linkedAccount = await authService.linkAccount(accountInfo, currentUser);

    res.status(201).json(linkedAccount);
  } catch (error) {
    res.status(500).json({ error: 'Failed to link account: ' + error.message });
  }
};

const unlinkAccount = async (req: Request, res: Response) => {
  const { providerAccountId, provider } = req.query;
  try {
    if (!providerAccountId || !provider)
      return res.status(404).json({ error: 'Account not found' });
    await authService.unlinkAccount({ providerAccountId, provider });

    res.status(201).json(null);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete account: ' + error.message });
  }
};

export default {
  login,
  logout,
  createSession,
  getSession,
  updateSession,
  deleteSession,
  linkAccount,
  unlinkAccount
};
