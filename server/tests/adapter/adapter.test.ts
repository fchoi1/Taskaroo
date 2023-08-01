import knex from '../../src/db';
import MyAdapter from '../../src/utils/adapter';
import { runBasicTests } from './adapter-test-utils';

const renameAccountKeys = (account: any) => {
  const accountKeyMapping: Record<string, string> = {
    providerAccountId: 'providerAccountId',
    accessToken: 'access_token',
    expiresAt: 'expires_at',
    idToken: 'id_token',
    refreshToken: 'refresh_token',
    tokenType: 'token_type',
    sessionState: 'session_state'
  };

  const result: Record<string, any> = {};
  for (const key in account) {
    const mappedKey = accountKeyMapping[key] || key;
    result[mappedKey] = account[key];
  }
  return result;
};

const processData = (model: any) => {
  delete model.createdAt;
  delete model.createdBy;
  delete model.updatedAt;
  delete model.updatedBy;

  if ('fullName' in model) {
    delete model.fullName;
  }

  if ('password' in model) {
    delete model.password;
  }

  if (model.expires) {
    model.expires = new Date(model.expires);
  }

  if (model.emailVerified) {
    model.emailVerified = new Date(model.emailVerified);
  }
};

runBasicTests({
  adapter: MyAdapter(),
  db: {
    verificationToken: () => null,
    connect: async () => {
      return await knex;
    },
    // verificationToken: async (where) => {
    //   const verificationToken =
    //     await sequelize.models.verificationToken.findOne({ where })

    //   return verificationToken?.get({ plain: true }) || null
    // },
    user: async (id) => {
      const [user] = await knex('users').select('*').where({ id }).limit(1);

      if (user && Object.keys(user).length > 0) {
        processData(user);
        return user;
      }

      return null;
    },
    account: async (where: any) => {
      const [account] = await knex('accounts').select('*').where(where).limit(1);

      if (account && Object.keys(account).length > 0) {
        processData(account);
        return renameAccountKeys(account);
      }

      return null;
    },
    session: async (sessionToken) => {
      const [session] = await knex('sessions').select('*').where({ sessionToken }).limit(1);

      if (session && Object.keys(session).length > 0) {
        processData(session);
        return session;
      }
      return null;
    }
  }
});
