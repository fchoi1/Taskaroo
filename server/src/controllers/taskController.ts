import { Request, Response } from 'express';
import taskModel from '../models/taskModel';

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskModel.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve tasks' });
  }
};

// Implement other controller functions for task operations

export default {
  getAllTasks,
  // Export other functions for task operations
};
