'use client';

import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import styled from 'styled-components';

import BaseInterface from '../../BaseInterface';
import Menu from '../../components/Menu';
import StatusColumn from '../../components/StatusColumn';
import { useTaskContext } from '../../context/taskContext';
import { Status, Task } from '../../utils/Interfaces';

export const StatusesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface TaskBoardProps extends BaseInterface {
  // Define the props interface here if needed
  children: React.ReactNode;
}
const statusesBlank: Status[] = [
  { id: 1, step: 1, name: 'To do', tasks: [] },
  { id: 2, step: 2, name: 'In Progress', tasks: [] },
  { id: 3, step: 3, name: 'Done', tasks: [] },
  { id: 4, step: 4, name: 'Test', tasks: [] }
];

const assignTasksToStatuses = (tasks: Task[], statuses: Status[]): Status[] => {
  const updatedStatuses: Status[] = statuses.map((status) => {
    const statusTasks = tasks.filter((task) => task.statusId === status.id);
    return { ...status, tasks: statusTasks };
  });

  return updatedStatuses;
};

const TaskBoard: NextPage<TaskBoardProps> = () => {
  const { tasks } = useTaskContext();

  //  get statuses somehow from project api
  const [statuses, setStatuses] = useState<Status[]>(
    assignTasksToStatuses(tasks ?? [], statusesBlank)
  );

  useEffect(() => {
    const initialStatuses = assignTasksToStatuses(tasks, statusesBlank);
    setStatuses(initialStatuses);
    console.log('got tasks!!!', tasks);
  }, [tasks]);

  const handleDragEnd = (
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

  return (
    <Menu>
      <DragDropContext
        onDragEnd={(result: DropResult) => handleDragEnd(result, statuses, setStatuses)}
      >
        <StatusesContainer>
          {statuses.map((status) => {
            const { id, name } = status;
            return <StatusColumn key={id} showAddTaskButton={name === 'To do'} status={status} />;
          })}
        </StatusesContainer>
      </DragDropContext>
    </Menu>
  );
};

export default TaskBoard;
