import { AccountModel, UserModel } from '../models';
import type { NewUser, User } from '../utils/Interfaces';
import AuthService from './AuthService';
class UserService {
  async getUsers(): Promise<User[]> {
    return UserModel.query();
  }

  async createUser(user: NewUser, currentUser: string): Promise<User> {
    try {
      const createdUser = await UserModel.query().insertAndFetch(user).context({ currentUser });
      return createdUser;
    } catch (error) {
      throw new Error('Failed to create user: ' + error.message);
    }
  }

  async getUser(userId: string): Promise<User> {
    try {
      const user = await UserModel.query().findById(userId);
      return user;
    } catch (error) {
      throw new Error('Failed to get user: ' + error.message);
    }
  }

  async getUserByEmail(email: string): Promise<User> {
    try {
      const user = await UserModel.query().findOne({ email });
      return user;
    } catch (error) {
      throw new Error('Failed to get user by email: ' + error.message);
    }
  }

  async getUserByAccount({ providerAccountId, provider }): Promise<User> {
    try {
      const account = await AccountModel.query()
        .findOne({ providerAccountId, provider })
        .select('userId');

      if (!account) return null;
      const { userId } = account;
      if (!userId) return null;

      const user = await UserModel.query().findById(account.userId);
      return user;
    } catch (error) {
      throw new Error('Failed to get user by account: ' + error.message);
    }
  }

  async updateUser(user: User, currentUser: string): Promise<User> {
    try {
      const updatedUser = await UserModel.query()
        .patchAndFetchById(user.id, user)
        .context({ currentUser });
      return updatedUser;
    } catch (error) {
      throw new Error('Failed to update userservice: ' + error.message);
    }
  }

  async deleteUser(userId: string): Promise<void> {
    const authService = new AuthService();
    try {
      await authService.deleteSessionByUser(userId);
      await authService.unlinkAccountByUser(userId);
      await UserModel.query().deleteById(userId);
    } catch (error) {
      throw new Error('Failed to delete user: ' + error.message);
    }
  }

  // Add other functions here as needed
}

export default UserService;
