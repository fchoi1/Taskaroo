import knex from '../db';
import type { Task } from '../utils/Interfaces';

const taskService = {
  createTask: async (task: Task): Promise<void> => {
    await knex('tasks').insert(task);
  },

  getTasks: async (): Promise<Task[]> => {
    return knex('tasks').select('*');
  }

  // Add other functions here as needed
};

export default taskService;
