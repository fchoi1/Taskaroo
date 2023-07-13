import { v4 as uuidv4 } from 'uuid';

import type { Project, Status, Task } from '../utils/Interfaces';
import { TasksState } from './taskActions';

// Generate test data with UUIDs for tasks and status
const generateTestData = (): {
  initialTasks: TasksState;
  statuses: Status[];
  projects: Project[];
} => {
  const statuses: Status[] = [
    { id: uuidv4(), step: 1, name: 'To do', tasks: [] },
    { id: uuidv4(), step: 2, name: 'In Progress', tasks: [] },
    { id: uuidv4(), step: 3, name: 'Done', tasks: [] },
    { id: uuidv4(), step: 4, name: 'Test', tasks: [] }
  ];

  const description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const initialTasks: TasksState = {
    data: [],
    isLoading: false,
    error: null
  };
  const projects: Project[] = [
    { name: 'Project 1', color: 'primary', id: uuidv4() },
    { name: 'Project 2', color: 'secondary', id: uuidv4() },
    { name: 'Project 3', color: 'accent', id: uuidv4() }
  ];
  const TaskLength = 10;
  const numPriorities = 4;
  // Generate tasks with UUIDs and random status
  for (let i = 0; i < TaskLength; i++) {
    const task: Task = {
      id: uuidv4(),
      title: 'Task  #' + i,
      statusId: statuses[Math.floor(Math.random() * statuses.length)].id,
      description,
      priorityId: Math.floor(Math.random() * numPriorities),
      comments: []
    };
    initialTasks.data.push(task);
  }

  return { initialTasks, statuses, projects };
};

export default generateTestData;
