import BaseModel from './BaseModel';

const TaskSchema = {
  id: 'uuid',
  title: 'string',
  statusId: 'string',
  description: 'string',
  priorityId: 'integer'
};

class TaskModel extends BaseModel {
  id!: string;
  title!: string;
  statusId!: string;
  description!: string;
  priorityId!: number;

  static get tableName() {
    return 'tasks';
  }

  static get jsonSchema() {
    return {
      // Define your table schema here
      // ...
    };
  }
}

export { TaskModel, TaskSchema };

