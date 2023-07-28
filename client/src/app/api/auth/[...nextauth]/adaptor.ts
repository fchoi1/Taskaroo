// import type { Adapter } from '@auth/core/adapters';

// import { NewAccount, User } from '../../../../Interfaces';

// class AdapterError extends Error {
//   constructor(message: string) {
//     super(message);
//     this.name = 'AdapterError';
//   }
// }
// const MyAdapter: Adapter = (options: MyAdapterOptions = {}) => {
//   const fetchOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   return {
//     async createUser(user: User) {
//       try {
//         const createdUser = await fetch('/api/user', {
//           ...fetchOptions,
//           body: JSON.stringify({ user })
//         }).then((response) => response.json());
//         return createdUser;
//       } catch (error) {
//         throw new AdapterError(`Failed to create user: ${error.message}`);
//       }
//     },
//     async getUser(id: string) {
//       try {
//         const user = await fetch(`/api/user/${id}`).then((response) => response.json());
//         return user;
//       } catch (error: any) {
//         throw new Error(`Failed to get user: ${error.message}`);
//       }
//     },
//     async getUserByEmail(email: string) {
//       try {
//         const user = await fetch(`/api/user?email=${encodeURIComponent(email)}`).then((response) =>
//           response.json()
//         );
//         return user;
//       } catch (error: any) {
//         throw new Error(`Failed to get user by email: ${error.message}`);
//       }
//     },
//     async getUserByAccount({
//       providerAccountId,
//       provider
//     }: {
//       providerAccountId: string;
//       provider: string;
//     }) {
//       try {
//         const user = await fetch(
//           `/api/user?providerAccountId=${encodeURIComponent(
//             providerAccountId
//           )}&provider=${encodeURIComponent(provider)}`
//         ).then((response) => response.json());
//         return user;
//       } catch (error: any) {
//         throw new Error(`Failed to get user by account: ${error.message}`);
//       }
//     },
//     async updateUser(user: string) {
//       try {
//         const updatedUser = await fetch(`/api/user/${user.id}`, {
//           ...fetchOptions,
//           method: 'PUT',
//           body: JSON.stringify({ user })
//         }).then((response) => response.json());
//         return updatedUser;
//       } catch (error: any) {
//         throw new Error(`Failed to update user: ${error.message}`);
//       }
//     },
//     async deleteUser(userId: string) {
//       try {
//         await fetch(`/api/user/${userId}`, {
//           method: 'DELETE'
//         });
//       } catch (error: any) {
//         throw new Error(`Failed to delete user: ${error.message}`);
//       }
//     },
//     async linkAccount(account: NewAccount) {
//       try {
//         const linkedAccount = await fetch('/api/account/link', {
//           ...fetchOptions,
//           body: JSON.stringify({ account })
//         }).then((response) => response.json());
//         return linkedAccount;
//       } catch (error: any) {
//         throw new Error(`Failed to link account: ${error.message}`);
//       }
//     },
//     async unlinkAccount({
//       providerAccountId,
//       provider
//     }: {
//       providerAccountId: string;
//       provider: string;
//     }) {
//       try {
//         await fetch(
//           `/api/account/unlink?providerAccountId=${encodeURIComponent(
//             providerAccountId
//           )}&provider=${encodeURIComponent(provider)}`,
//           {
//             method: 'DELETE'
//           }
//         );
//         return true;
//       } catch (error: any) {
//         throw new Error(`Failed to unlink account: ${error.message}`);
//       }
//     },
//     async createSession({
//       sessionToken,
//       userId,
//       expires
//     }: {
//       sessionToken: string;
//       userId: string;
//       expires: string;
//     }) {
//       try {
//         const session = await fetch('/api/session', {
//           ...fetchOptions,
//           body: JSON.stringify({ userId, expires })
//         }).then((response) => response.json());
//         return session;
//       } catch (error: any) {
//         throw new Error(`Failed to create session: ${error.message}`);
//       }
//     },
//     async getSession(sessionToken) {
//       try {
//         const session = await fetch(`/api/session/${sessionToken}`).then((response) =>
//           response.json()
//         );
//         return session;
//       } catch (error: any) {
//         throw new Error(`Failed to get session: ${error.message}`);
//       }
//     },
//     async updateSession({ sessionToken }) {
//       try {
//         await fetch(`/api/session/${sessionToken}`, {
//           ...fetchOptions,
//           method: 'PUT'
//         });
//         return true;
//       } catch (error: any) {
//         throw new Error(`Failed to update session: ${error.message}`);
//       }
//     },
//     async deleteSession(sessionToken) {
//       try {
//         await fetch(`/api/session/${sessionToken}`, {
//           method: 'DELETE'
//         });
//         return true;
//       } catch (error: any) {
//         throw new Error(`Failed to delete session: ${error.message}`);
//       }
//     }
//   };
// };

// export default MyAdapter;
