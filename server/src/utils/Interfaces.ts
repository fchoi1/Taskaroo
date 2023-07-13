export interface BaseModelInterface {
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
}
export interface Task extends BaseModelInterface {
  id: string;
  title: string;
  statusId: string;
  description: string;
  priorityId: number;
  comments?: unknown[];
}

export interface Comment extends BaseModelInterface {
  id: string;
  taskId: number;
}

export interface Status extends BaseModelInterface {
  id: string;
  name: string;
  step: number;
  tasks?: Task[];
}

export interface Project extends BaseModelInterface {
  name: string;
  color: string;
  id: string;
}

export interface User extends BaseModelInterface {
  id: string;
  nick?: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  emailVerified?: Date;
}

export type NewUser = Omit<User, 'id' | 'createdBy' | 'createdAt' | 'updatedBy' | 'updatedAt'>;

export interface Account extends BaseModelInterface {
  id: string;
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
