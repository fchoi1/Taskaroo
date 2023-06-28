import knex from '../db';
import { TaskModel } from '../models/taskModel';

const taskService = {
  createTask: async (task: TaskModel): Promise<void> => {
    await knex('tasks').insert(task);
  },

  getTasks: async (): Promise<TaskModel[]> => {
    return knex('tasks').select('*');
  }

  // Add other functions here as needed
};

export default taskService;
