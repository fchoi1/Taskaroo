import { Request, Response } from 'express';
import UserService from '../service/UserService';
import { NewUser, User } from '../utils/Interfaces';

const userService = new UserService();

const getUser = async (req: Request, res: Response) => {
  try {
    const { providerAccountId, provider, email, id } = req.params;

    if (id) {
      const user = await userService.getUser(id);
      return res.json(user);
    }

    if (email) {
      const user = await userService.getUserByEmail(email);
      return res.json(user);
    }

    if (providerAccountId && provider) {
      const user = await userService.getUserByAccount({ providerAccountId, provider });
      return res.json(user);
    }

    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users: ' + error.message });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { user }: { user: NewUser } = req.body;
    const createdUser = await userService.createUser(user);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user: ' + error.message });
  }
};

const getUserbyId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUser(userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user:' + error.message });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const updatedUser: User = req.body;
    const user = await userService.updateUser({ ...updatedUser, id: userId });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user: ' + error.message });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    await userService.deleteUser(userId);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user ' + error.message });
  }
};

export default {
  getUser,
  createUser,
  getUserbyId,
  updateUser,
  deleteUser
};
