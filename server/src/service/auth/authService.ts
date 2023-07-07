import { UserModel } from '../../models';

export interface NewUser {
  nick?: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export const authenticateUser = async (email: string, password: string) => {
  // Retrieve the user by username from the database
  const user = await UserModel.query().findOne({ email });

  if (user) {
    const isPasswordValid = await user.comparePasswords(password);
    return isPasswordValid ? { isAuthenticated: true, user } : { isAuthenticated: false };
  }

  return { isAuthenticated: false };
};

export const createUser = async (user: NewUser) => {
  // Create a new user record in the database
  await UserModel.query().insert(user);
};
