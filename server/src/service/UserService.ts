import { UserModel } from '../models';
import type { NewUser, User } from '../utils/Interfaces';

class UserService {
  async getUsers(): Promise<User[]> {
    return UserModel.query();
  }

  async createUser(user: NewUser): Promise<User> {
    try {
      const createdUser = await UserModel.query().insertAndFetch(user);
      return createdUser;
    } catch (error) {
      throw new Error('Failed to create user: ' + error);
    }
  }

  async getUser(userId: string): Promise<User> {
    try {
      const user = await UserModel.query().findById(userId);
      return user;
    } catch (error) {
      throw new Error('Failed to get user: ' + error);
    }
  }

  async getUserByEmail(email: string): Promise<User> {
    try {
      const user = await UserModel.query().findOne({ email });
      return user;
    } catch (error) {
      throw new Error('Failed to get user by email: ' + error);
    }
  }

  async getUserByAccount({ providerAccountId, provider }): Promise<User> {
    try {
      const user = await UserModel.query().findOne({ providerAccountId, provider });
      return user;
    } catch (error) {
      throw new Error('Failed to get user by account: ' + error);
    }
  }

  async updateUser(user: User): Promise<User> {
    try {
      const [updatedUser] = await UserModel.query().findById(user.id).patch(user).returning('*');
      return updatedUser;
    } catch (error) {
      throw new Error('Failed to update user: ' + error);
    }
  }

  async deleteUser(userId: string): Promise<void> {
    try {
      await UserModel.query().deleteById(userId);
    } catch (error) {
      throw new Error('Failed to delete user: ' + error);
    }
  }

  // Add other functions here as needed
}

export default UserService;
