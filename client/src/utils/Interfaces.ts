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
