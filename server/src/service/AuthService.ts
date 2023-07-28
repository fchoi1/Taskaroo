import { AccountModel, SessionModel, UserModel } from '../models';
import type { NewAccount, Session, User } from '../utils/Interfaces';

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

  async linkAccount(account: NewAccount, currentUser: string) {
    try {
      const createdAccount = await AccountModel.query()
        .insertAndFetch(account)
        .context({ currentUser });
      return createdAccount;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to link account:' + error.message);
    }
  }

  async unlinkAccount({ providerAccountId, provider }) {
    try {
      await AccountModel.query().where({ provider, providerAccountId }).delete();

      return true;
    } catch (error) {
      throw new Error('Failed to unlink account:' + error.message);
    }
  }

  async unlinkAccountByUser(userId: string) {
    try {
      await AccountModel.query().where({ userId }).delete();

      return true;
    } catch (error) {
      throw new Error('Failed to unlink account by user:' + error.message);
    }
  }

  async createSession(session: Session, currentUser: string) {
    try {
      const newSession = await SessionModel.query()
        .insertAndFetch(session)
        .context({ currentUser });
      return newSession;
    } catch (error) {
      throw new Error('Failed to create Session: ' + error.message);
    }
  }

  async updateSession(session: Session, currentUser: string) {
    try {
      await SessionModel.query()
        .where('sessionToken', session.sessionToken)
        .patch(session)
        .context({ currentUser });
      return true;
    } catch (error) {
      throw new Error('Failed to update Session: ' + error.message);
    }
  }

  async deleteSession(sessionToken: string) {
    try {
      await SessionModel.query().delete().where({ sessionToken });
    } catch (error) {
      throw new Error('Failed to delete Session: ' + error.message);
    }
  }

  async deleteSessionByUser(userId: string) {
    try {
      await SessionModel.query().delete().where({ userId });
    } catch (error) {
      throw new Error('Failed to delete Session by user: ' + error.message);
    }
  }

  async getSession(sessionToken: string) {
    try {
      const session = await SessionModel.query().findOne({ sessionToken });
      const user = session ? await UserModel.query().findById(session.userId) : null;
      return { session, user };
    } catch (error) {
      throw new Error('Failed to get Session: ' + error.message);
    }
  }
}

export default AuthService;
