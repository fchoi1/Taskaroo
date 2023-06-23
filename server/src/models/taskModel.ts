import db from '../db';

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

const getAllTasks = async (): Promise<Task[]> => {
  return db('tasks').select('*');
};

// Implement other database operations as needed

export default {
  getAllTasks,
  // Export other functions for task operations
};
