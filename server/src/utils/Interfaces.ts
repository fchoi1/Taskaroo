export interface Task {
  id: string;
  title: string;
  statusId: string;
  description: string;
  priorityId: number;
  comments?: unknown[];
}

export interface Comment {
  id: string;
  taskId: number;
}

export interface Status {
  id: string;
  name: string;
  step: number;
  tasks: Task[];
}

export interface Project {
  name: string;
  color: string;
  id: string;
}
