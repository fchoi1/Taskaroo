import { Request, Response } from 'express';
import UserService from '../service/UserService';
import { NewUser, User } from '../utils/Interfaces';

const userService = new UserService();

const getUser = async (req: Request, res: Response) => {
  try {
    const { providerAccountId, provider, email, id } = req.query;

    if (!providerAccountId && !provider && !email && !id) {
      const users = await userService.getUsers();
      return res.json(users);
    }

    let user: User | undefined;
    if (id) {
      user = await userService.getUser(id as string);
    }

    if (email) {
      user = await userService.getUserByEmail(email as string);
    }

    if (providerAccountId && provider) {
      user = await userService.getUserByAccount({ providerAccountId, provider });
    }
    return user ? res.json(user) : res.status(404).json(null);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users: ' + error.message });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { user }: { user: NewUser } = req.body;
    const currentUser = req.body.currentUser;

    const createdUser = await userService.createUser(user, currentUser);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user: ' + error.message });
  }
};

const getUserbyId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUser(userId);

    if (!user) res.status(404).json(null);

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user:' + error.message });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { user: updatedUser }: { user: User } = req.body;
    const currentUser = req.body.currentUser;

    const user = await userService.updateUser({ ...updatedUser, id }, currentUser);
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
