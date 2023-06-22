import { DropResult } from 'react-beautiful-dnd';

import { Status, Task } from '../../utils/Interfaces';

export const handleDragEnd = (
  result: DropResult,
  statuses: Status[],
  setStatuses: React.Dispatch<React.SetStateAction<Status[]>>
) => {
  if (!result.destination) return;
  const { source, destination } = result;
  const sourceIndex = parseInt(source.droppableId.split('-')[1]) - 1;
  const destIndex = parseInt(destination.droppableId.split('-')[1]) - 1;

  const sourceStatus = statuses[sourceIndex];
  const destStatus = statuses[destIndex];

  if (source.droppableId !== destination.droppableId) {
    const sourceTasks = [...sourceStatus.tasks];
    const destTasks = [...destStatus.tasks];

    const [removed] = sourceTasks.splice(source.index, 1);
    removed.statusId = destStatus.id;
    destTasks.splice(destination.index, 0, removed);

    const updatedStatuses = [...statuses];
    updatedStatuses[sourceIndex] = { ...sourceStatus, tasks: sourceTasks };
    updatedStatuses[destIndex] = { ...destStatus, tasks: destTasks };

    setStatuses(updatedStatuses);
  } else {
    const copiedTasks = [...sourceStatus.tasks];
    const [removed] = copiedTasks.splice(source.index, 1);
    copiedTasks.splice(destination.index, 0, removed);
    const updatedStatuses = [...statuses];
    updatedStatuses[sourceIndex] = { ...sourceStatus, tasks: copiedTasks };

    setStatuses(updatedStatuses);
  }
};

export const assignTasksToStatuses = (tasks: Task[], statuses: Status[]): Status[] => {
  const updatedStatuses: Status[] = statuses.map((status) => {
    const statusTasks = tasks.filter((task) => task.statusId === status.id);
    return { ...status, tasks: statusTasks };
  });

  return updatedStatuses;
};
