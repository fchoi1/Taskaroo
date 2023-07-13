import { TaskModel } from '../models';
import type { Task } from '../utils/Interfaces';

class TaskService {
  async createTask(task: Task): Promise<void> {
    await TaskModel.query().insert(task);
  }

  async getTasks(): Promise<Task[]> {
    return TaskModel.query();
  }

  // Add other functions here as needed
}

export default TaskService;
