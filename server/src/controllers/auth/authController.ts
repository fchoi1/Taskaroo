import type { Request, Response } from 'express';
import AuthService from '../../service/AuthService';
import UserService from '../../service/UserService';
import { clearSessionUser, setSessionUser } from '../../utils/authUtils';

const userService = new UserService();
const authService = new AuthService();

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Authenticate the user
    const { isAuthenticated, user } = await authService.authenticateUser(email, password);

    if (isAuthenticated) {
      if (!user) res.status(403).json({ error: 'User not found' });

      const { email, id, nick } = user;
      setSessionUser(req, { email, id, username: nick });

      res.json({ message: 'Login successful' });
      res.status(200);
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during login:' + error.message });
  }
};

// Implement other controller functions for comment operations
const register = async (req: Request, res: Response) => {
  // Extract the username and password from the request body
  const { email, password, firstName, lastName } = req.body;

  try {
    // Create a new user
    await userService.createUser({ email, password, firstName, lastName });

    // User registration successful, return a success response
    res.json({ message: 'Registration successful' });
  } catch (error) {
    // Handle any errors that occurred during user registration
    res.status(500).json({ error: 'An error occurred during registration: ' + error.message });
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    // Clear the user from the session
    clearSessionUser(req, res);
    // Logout the user
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during logout: ' + error.message });
  }
};

export default {
  login,
  register,
  logout
  // Export other functions for comment operations
};
