import { TaskModel } from '../models';
import type { Task } from '../utils/Interfaces';

class TaskService {
  async createTask(task: Task, currentUser: string): Promise<void> {
    await TaskModel.query().insert(task).context({ currentUser });
  }

  async getTasks(): Promise<Task[]> {
    return TaskModel.query();
  }

  // Add other functions here as needed
}

export default TaskService;
