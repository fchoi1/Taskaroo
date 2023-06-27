import db from '../db';
import { Task } from '../utils/Interfaces';

const getAllTasks = async (): Promise<Task[]> => {
  return db('tasks').select('*');
};

// Implement other database operations as needed

export default {
  getAllTasks
  // Export other functions for task operations
};
