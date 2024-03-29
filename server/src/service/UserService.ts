import { UserModel } from '../models';
import type { NewUser, SessionUser, User } from '../utils/Interfaces';

class UserService {
  async getUsers(): Promise<User[]> {
    return UserModel.query();
  }

  async createUser(user: NewUser, currentUser: SessionUser): Promise<User> {
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
      const user = await UserModel.query().findOne({ providerAccountId, provider });
      return user;
    } catch (error) {
      throw new Error('Failed to get user by account: ' + error.message);
    }
  }

  async updateUser(user: User,  currentUser: SessionUser): Promise<User> {
    try {
      const updatedUser = await UserModel.query().updateAndFetchById(user.id, user).context({ currentUser });
      return updatedUser;
    } catch (error) {
      throw new Error('Failed to update userservice: ' + error.message);
    }
  }

  async deleteUser(userId: string): Promise<void> {
    try {
      await UserModel.query().deleteById(userId);
    } catch (error) {
      throw new Error('Failed to delete user: ' + error.message);
    }
  }

  // Add other functions here as needed
}

export default UserService;
