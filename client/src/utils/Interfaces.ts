export interface Task {
  id: number;
  title: string;
  statusId: number;
}

export interface Status {
  id: number;
  name: string;
  step: number;
  tasks: Task[];
}

export interface Project {
  name: string;
  color: string;
  id: number;
}
