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

export interface User extends BaseModelInterface {
  nick?: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  emailVerified?: Date;
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

export interface SessionUser {
  id: string;
  email: string;
  username?: string;
}

export interface SessionData {
  loggedIn?: boolean;
  user?: SessionUser;
  token?: string;
}

type OmitBaseModel<T> = Omit<T, keyof BaseModelInterface>;

export type NewUser = OmitBaseModel<User>;
export type NewStatus = OmitBaseModel<Status>;
export type NewProject = OmitBaseModel<Project>;
export type NewTask = OmitBaseModel<Task>;
export type NewAccount = OmitBaseModel<Account>;
export type NewComment = OmitBaseModel<Comment>;
