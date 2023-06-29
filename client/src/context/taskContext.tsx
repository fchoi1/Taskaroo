import React, { createContext, useContext, useEffect, useReducer } from 'react';

// import { fetchTasks } from '../api/';
import type { Project, Status, Task } from '../utils/Interfaces';
import taskActions, { TaskAction, TasksState } from './taskActions';
import generateTestData from './testData';

interface TaskContextProps {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
  setTasks: (taskData: Task[]) => void;
  addTask: (task: Task) => void;
  removeTask: (taskId: string) => void;
  updateTask: (task: Task) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;

  statuses: Status[]; // Temp
  projects: Project[]; // Temp
}

const { initialTasks, statuses, projects } = generateTestData();

const taskReducer = (state: TasksState, action: TaskAction): TasksState => {
  switch (action.type) {
    case taskActions.SET_TASKS:
      return {
        ...state,
        data: action.payload
      };
    case taskActions.ADD_TASK:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case taskActions.REMOVE_TASK:
      return {
        ...state,
        data: state.data.filter((task) => task.id !== action.payload)
      };
    case taskActions.UPDATE_TASK:
      return {
        ...state,
        data: state.data.map((task) => (task.id === action.payload.id ? action.payload : task))
      };
    case taskActions.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case taskActions.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

const TaskContext = createContext<TaskContextProps | null>(null);

const useTaskContext = (): TaskContextProps => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

function fetchInitialTasks(currentUser: string) {
  // ...
  console.log(currentUser);
  return initialTasks;
}

const TaskProvider: React.FC<{ children: React.ReactNode; currentUser: string }> = ({
  children,
  currentUser
}) => {
  const [tasks, dispatch] = useReducer(taskReducer, currentUser, fetchInitialTasks);

  // Fetch From API
  useEffect(() => {
    // fetchTasks();
  }, []);

  const setTasks = (taskData: Task[]) => {
    dispatch({ type: taskActions.SET_TASKS, payload: taskData });
  };

  const addTask = (task: Task) => {
    console.log('Adding a new task', task);
    dispatch({ type: taskActions.ADD_TASK, payload: task });
  };

  const removeTask = (taskId: string) => {
    dispatch({ type: taskActions.REMOVE_TASK, payload: taskId });
  };

  const updateTask = (task: Task) => {
    dispatch({ type: taskActions.UPDATE_TASK, payload: task });
  };

  const setLoading = (isLoading: boolean) => {
    dispatch({ type: taskActions.SET_LOADING, payload: isLoading });
  };

  const setError = (error: string | null) => {
    dispatch({ type: taskActions.SET_ERROR, payload: error });
  };

  const taskContextValue: TaskContextProps = {
    tasks: tasks.data,
    isLoading: tasks.isLoading,
    error: tasks.error,
    setTasks,
    addTask,
    removeTask,
    updateTask,
    setLoading,
    setError,
    statuses, //Temp
    projects // Temp
  };

  return <TaskContext.Provider value={taskContextValue}>{children}</TaskContext.Provider>;
};

export { TaskProvider, useTaskContext };
