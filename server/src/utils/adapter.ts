import type { AdapterSession, AdapterUser } from '@auth/core/adapters';
import { Adapter, AdapterAccount } from 'next-auth/src/adapters';

import { NewAdapterUser } from '../../src/utils/Interfaces';

// import fetch from 'node-fetch'

class AdapterError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AdapterError';
  }
}

// aeslint-disable-next-line @typescript-eslint/ban-ts-comment
// a@ts-nocheck

export default function MyAdapter(): Adapter {
  let apiUrl = '';
  let fetch: any;

  if (typeof window === 'undefined') {
    // Running in the server (Node.js) environment
    fetch = require('node-fetch');
    apiUrl = 'http://localhost:3001'; // Update the API base URL
  } else {
    // Running in the client (browser) environment
    fetch = window.fetch;
  }

  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const processData = (model: any) => {
    delete model.createdAt;
    delete model.createdBy;
    delete model.updatedAt;
    delete model.updatedBy;

    if (model.fullName) {
      delete model.fullName;
    }

    if (model.expires) {
      model.expires = new Date(model.expires);
    }

    if (model.emailVerified) {
      model.emailVerified = new Date(model.emailVerified);
    }
  };

  const renameAccountKeys = (account: any) => {
    const accountKeyMapping = {
      providerAccountId: 'providerAccountId',
      accessToken: 'access_token',
      expiresAt: 'expires_at',
      idToken: 'id_token',
      refreshToken: 'refresh_token',
      tokenType: 'token_type',
      sessionState: 'session_state'
    };
    const result = {};
    for (const key in account) {
      const mappedKey = accountKeyMapping[key] || key;
      result[mappedKey] = account[key];
    }
    return result;
  };

  return {
    createUser: async (user: AdapterUser) => {
      const name = user.name ? user.name : user.email;
      const newUser: NewAdapterUser = { ...user, name };
      const [firstName, ...lastNameArray] = user.name.split(' ');
      newUser.firstName = firstName;
      newUser.lastName = lastNameArray.length > 0 ? lastNameArray.join(' ') : undefined;

      try {
        const createdUser = await fetch(`${apiUrl}/api/user`, {
          ...fetchOptions,
          body: JSON.stringify({ user: newUser })
        }).then((response) => response.json());

        processData(createdUser);
        return createdUser;
      } catch (error) {
        throw new AdapterError(`Failed to create user: ${error.message}`);
      }
    },

    async getUser(id: string) {
      try {
        const user = await fetch(`${apiUrl}/api/user/${id}`).then((response) => response.json());
        if (!user) return null;

        processData(user);
        return user;
      } catch (error: any) {
        throw new Error(`Failed to get user: ${error.message}`);
      }
    },

    async getUserByEmail(email: string) {
      try {
        const user = await fetch(`${apiUrl}/api/user?email=${encodeURIComponent(email)}`).then(
          (response) => response.json()
        );
        if (!user) return null;

        processData(user);
        return user;
      } catch (error: any) {
        throw new Error(`Failed to get user by email: ${error.message}`);
      }
    },

    async getUserByAccount({
      providerAccountId,
      provider
    }: {
      providerAccountId: string;
      provider: string;
    }) {
      try {
        const user = await fetch(
          `${apiUrl}/api/user?providerAccountId=${encodeURIComponent(
            providerAccountId
          )}&provider=${encodeURIComponent(provider)}`
        ).then((response) => response.json());
        if (!user) return null;

        processData(user);
        return user;
      } catch (error: any) {
        throw new Error(`Failed to get user by account: ${error.message}`);
      }
    },

    async updateUser(user: AdapterUser) {
      try {
        const updatedUser = await fetch(`${apiUrl}/api/user/${user.id}`, {
          ...fetchOptions,
          method: 'PUT',
          body: JSON.stringify({ user })
        }).then((response) => response.json());
        if (!updatedUser) return null;

        processData(updatedUser);
        return updatedUser;
      } catch (error: any) {
        throw new Error(`Failed to update user: ${error.message}`);
      }
    },

    async deleteUser(userId: string) {
      try {
        await fetch(`${apiUrl}/api/user/${userId}`, {
          method: 'DELETE'
        });
      } catch (error: any) {
        throw new Error(`Failed to delete user: ${error.message}`);
      }
    },

    async linkAccount(account: AdapterAccount) {
      try {
        const unMappedAccount = await fetch(`${apiUrl}/api/account/link`, {
          ...fetchOptions,
          body: JSON.stringify({ account })
        }).then((response) => response.json());
        const linkedAccount = renameAccountKeys(unMappedAccount);
        processData(linkedAccount);
        return null;
      } catch (error: any) {
        throw new Error(`Failed to link account: ${error.message}`);
      }
    },

    async unlinkAccount({
      providerAccountId,
      provider
    }: {
      providerAccountId: string;
      provider: string;
    }) {
      try {
        await fetch(
          `${apiUrl}/api/account/unlink?providerAccountId=${encodeURIComponent(
            providerAccountId
          )}&provider=${encodeURIComponent(provider)}`,
          {
            method: 'DELETE'
          }
        );
        return;
      } catch (error: any) {
        throw new Error(`Failed to unlink account: ${error.message}`);
      }
    },

    async createSession({ sessionToken, userId, expires }: AdapterSession) {
      try {
        const session = await fetch(`${apiUrl}/api/session`, {
          ...fetchOptions,
          body: JSON.stringify({ userId, expires, sessionToken })
        }).then((response) => response.json());

        processData(session);
        return session;
      } catch (error: any) {
        throw new Error(`Failed to create session: ${error.message}`);
      }
    },

    async getSessionAndUser(sessionToken) {
      try {
        const sessionAndUser = await fetch(`${apiUrl}/api/session/${sessionToken}`).then(
          (response) => response.json()
        );

        if (!sessionAndUser) return null;
        processData(sessionAndUser.session);
        processData(sessionAndUser.user);
        return sessionAndUser;
      } catch (error: any) {
        throw new Error(`Failed to get session: ${error.message}`);
      }
    },

    async updateSession(session: AdapterSession) {
      try {
        await fetch(`${apiUrl}/api/session/${session.sessionToken}`, {
          ...fetchOptions,
          method: 'PUT',
          body: JSON.stringify({ session })
        });
        return null;
      } catch (error: any) {
        throw new Error(`Failed to update session: ${error.message}`);
      }
    },

    async deleteSession(sessionToken: string) {
      try {
        await fetch(`${apiUrl}/api/session/${sessionToken}`, {
          method: 'DELETE'
        });
        return;
      } catch (error: any) {
        throw new Error(`Failed to delete session: ${error.message}`);
      }
    }
  };
}
