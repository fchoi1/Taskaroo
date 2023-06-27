import { Knex } from 'knex';

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

const createTask = async (knex: Knex, task: TaskModel): Promise<void> => {
  await knex('tasks').insert(task);
};

const getTasks = async (knex: Knex): Promise<TaskModel[]> => {
  return knex('tasks').select('*');
};

export { TaskModel, TaskSchema, createTask, getTasks };
