interface TaskModel {
  id: string;
  title: string;
  statusId: string;
  description: string;
  priorityId: number;
}

const TaskSchema = {
  id: 'uuid',
  title: 'string',
  statusId: 'string',
  description: 'string',
  priorityId: 'integer'
};

export { TaskModel, TaskSchema };
