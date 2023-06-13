export interface Task {
  id: number;
  title: string;
  statusId: number;
}

export interface Status {
  id: number;
  name: string;
  tasks: Task[];
}
