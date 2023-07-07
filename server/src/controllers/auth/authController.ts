import type { Request, Response } from 'express';
import { authenticateUser, createUser } from '../../service/auth/authService';
import { clearSessionUser, setSessionUser } from '../../utils/authUtils';

const login = async (req: Request, res: Response) => {
  console.log('Login', req.body);
  const { email, password } = req.body;

  try {
    // Authenticate the user
    const { isAuthenticated, user } = await authenticateUser(email, password);

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
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
};

// Implement other controller functions for comment operations
const register = async (req: Request, res: Response) => {
  // Extract the username and password from the request body
  const { email, password, firstName, lastName } = req.body;

  try {
    // Create a new user
    await createUser({ email, password, firstName, lastName });

    // User registration successful, return a success response
    res.json({ message: 'Registration successful' });
  } catch (error) {
    // Handle any errors that occurred during user registration
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'An error occurred during registration' });
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    // Clear the user from the session
    clearSessionUser(req, res);
    // Logout the user
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({ error: 'An error occurred during logout' });
  }
};

export default {
  login,
  register,
  logout
  // Export other functions for comment operations
};
