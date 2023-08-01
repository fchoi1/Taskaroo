export interface BaseModelInterface {
  id: string;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
}
export interface Task extends BaseModelInterface {
  title: string;
  statusId: string;
  description: string;
  priorityId: number;
  comments?: unknown[];
}

export interface Comment extends BaseModelInterface {
  taskId: number;
}

export interface Status extends BaseModelInterface {
  name: string;
  step: number;
  tasks?: Task[];
}

export interface Project extends BaseModelInterface {
  name: string;
  color: string;
}

export interface BaseUser extends BaseModelInterface {
  name: string;
  email: string;
  firstName?: string;
  lastName?: string;
  emailVerified?: Date;
  image?: string;
  fullname?: string;
}

export interface User extends BaseUser {
  firstName: string; // Override the firstName property with a required field
}

export interface AdapterUser extends BaseUser {
  firstName?: string; // Mark the firstName property as optional
}

export interface Account extends BaseModelInterface {
  userId: string;
  type?: string;
  provider?: string;
  providerAccountId?: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: string;
  session_state?: string;
}

export interface Session extends BaseModelInterface {
  loggedIn?: boolean;
  userId?: string;
  sessionToken?: string;
  expires?: Date;
}

type OmitBaseModel<T> = Omit<T, keyof BaseModelInterface>;

export type NewUser = OmitBaseModel<User>;
export type NewAdapterUser = OmitBaseModel<AdapterUser>;
export type NewStatus = OmitBaseModel<Status>;
export type NewProject = OmitBaseModel<Project>;
export type NewTask = OmitBaseModel<Task>;
export type NewAccount = OmitBaseModel<Account>;
export type NewComment = OmitBaseModel<Comment>;
export type NewSession = OmitBaseModel<Session>;
