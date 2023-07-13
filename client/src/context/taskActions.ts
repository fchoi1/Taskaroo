import type { Task } from '../utils/Interfaces';

export const taskActions = {
  SET_TASKS: 'SET_TASKS',
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  REORDER_TASKS: 'REORDER_TASKS',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR'
} as const;

export type TaskAction =
  | SetTasksAction
  | AddTaskAction
  | RemoveTaskAction
  | UpdateTaskAction
  | SetLoadingAction
  | SetErrorAction;

export interface TasksState {
  data: Task[];
  isLoading: boolean;
  error: string | null;
}

export interface SetTasksAction {
  type: 'SET_TASKS';
  payload: Task[];
}

export interface AddTaskAction {
  type: 'ADD_TASK';
  payload: Task;
}

export interface RemoveTaskAction {
  type: 'REMOVE_TASK';
  payload: string;
}

export interface UpdateTaskAction {
  type: 'UPDATE_TASK';
  payload: Task;
}

export interface SetLoadingAction {
  type: 'SET_LOADING';
  payload: boolean;
}

export interface SetErrorAction {
  type: 'SET_ERROR';
  payload: string | null;
}

export default taskActions;
