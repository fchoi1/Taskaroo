import type { Request, Response } from 'express';
import { promisify } from 'util';
import AuthService from '../service/AuthService';
import { NewAccount, SessionData } from '../utils/Interfaces';
import { clearSessionUser, setSessionUser } from '../utils/authUtils';

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

  let sessionData: SessionData;

  const setSessionAsync = promisify(req.sessionStore.set).bind(req.sessionStore);
  const saveSessionAsync = promisify(req.session.save).bind(req.session);
  const getSessionAsync = promisify(req.sessionStore.get).bind(req.sessionStore);

  try {
    if (sessionToken) {
      const { loggedIn, cookie } = req.session;
      await setSessionAsync(sessionToken, { cookie, loggedIn, user: { email, id, username } });
      sessionData = await getSessionAsync(sessionToken);
    } else {
      setSessionUser(req, { email, id, username });
      await saveSessionAsync();
      sessionData = req.session;
      sessionData.token = req.session.id;
    }

    res.status(201).json(sessionData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create session: ' + error.message });
  }
};

const getSession = async (req: Request, res: Response) => {
  try {
    let sessionData: SessionData;
    const { sessionToken } = req.params;

    if (sessionToken) {
      const getSessionAsync = promisify(req.sessionStore.get).bind(req.sessionStore);
      sessionData = await getSessionAsync(sessionToken);
    } else {
      sessionData = req.session;
      sessionData.token = req.session.id;
    }

    if (!sessionData) return res.status(404).json({ error: 'Session not found' });

    res.status(200).json(sessionData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get session and user: ' + error.message });
  }
};

const deleteSession = async (req: Request, res: Response) => {
  try {
    let sessionData: SessionData;

    const { sessionToken } = req.params;

    if (sessionToken) {
      const getSessionAsync = promisify(req.sessionStore.get).bind(req.sessionStore);
      sessionData = await getSessionAsync(sessionToken);
      if (!sessionData) return res.status(404).json({ error: 'Session does not exist' });

      const destroySessionAsync = promisify(req.sessionStore.destroy).bind(req.sessionStore);
      await destroySessionAsync(sessionToken);
      res.json(sessionData);
    } else {
      return clearSessionUser(req, res);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete session:' + error.message });
  }
};

const test = async (req: Request, res: Response) => {
  console.log('testing here>>>', req);

  res.status(200).json({ message: 'Soemthing' });
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
  } = req.body;

  const { user: currentUser } = req.session;

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
  const { providerAccountId } = req.params;
  const { provider } = req.query;
  try {
    if (!providerAccountId || !provider)
      return res.status(404).json({ error: 'Account not found' });
    const deletedAccount = await authService.unlinkAccount({ providerAccountId, provider });

    res.status(201).json(deletedAccount);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete account: ' + error.message });
  }
};

export default {
  login,
  logout,
  getSession,
  updateSession,
  deleteSession,
  linkAccount,
  unlinkAccount,
  test
};
