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

export interface SessionUser {
  id: string;
  username: string;
  email: string;
}



