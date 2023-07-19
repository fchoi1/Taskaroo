import { AccountModel, UserModel } from '../models';
import type { NewAccount, User } from '../utils/Interfaces';

class AuthService {
  async authenticateUser(
    email: string,
    password: string
  ): Promise<{ isAuthenticated: boolean; user?: User }> {
    const user = await UserModel.query().findOne({ email });

    if (user) {
      const isPasswordValid = await user.comparePasswords(password);
      return isPasswordValid ? { isAuthenticated: true, user } : { isAuthenticated: false };
    }
    return { isAuthenticated: false };
  }

  async linkAccount(account: NewAccount) {
    try {
      const createdAccount = await AccountModel.query().insert(account);
      return createdAccount;

      // Implement the linkAccount logic using Knex
    } catch (error) {
      console.error(error);
      throw new Error('Failed to link account');
    }
  }

  async unlinkAccount({ providerAccountId, provider }) {
    try {
      let deletedAccount: AccountModel;
      if (!providerAccountId) {
        // If providerAccountId is not provided, delete by the provider
        deletedAccount = await AccountModel.query()
          .where({ provider })
          .delete()
          .returning('*')
          .first();
      } else {
        // If providerAccountId is provided, delete by the providerAccountId
        deletedAccount = await AccountModel.query()
          .where({ providerAccountId })
          .delete()
          .returning('*')
          .first();
      }

      return deletedAccount;
    } catch (error) {
      throw new Error('Failed to unlink account');
    }
  }
}

export default AuthService;
