'use client';

import { NextPage } from 'next';
import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import styled from 'styled-components';

import BaseInterface from '../../BaseInterface';
import Menu from '../../components/Menu';
import StatusColumn from '../../components/StatusColumn';
import { Status } from '../../utils/Interfaces';

export const StatusesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface TaskBoardProps extends BaseInterface {
  // Define the props interface here if needed
  children: React.ReactNode;
}
const Statuses: Status[] = [
  {
    id: 1,
    step: 1,
    name: 'To do',
    tasks: [
      { id: 1, title: 'Task 1', statusId: 1 },
      { id: 5, title: 'Task 5', statusId: 1 },
      { id: 6, title: 'Task 6', statusId: 1 },
      { id: 8, title: 'Task 8', statusId: 1 },
      { id: 9, title: 'Task 9', statusId: 1 },
      { id: 10, title: 'Task 10', statusId: 1 },
      { id: 11, title: 'Task 11', statusId: 1 }
    ]
  },
  {
    id: 2,
    step: 2,
    name: 'In Progress',
    tasks: [
      { id: 2, title: 'Task 2', statusId: 2 },
      { id: 3, title: 'Task 3', statusId: 2 },
      { id: 7, title: 'Task 7', statusId: 2 }
    ]
  },
  { id: 3, step: 3, name: 'Done', tasks: [{ id: 4, title: 'Task 4', statusId: 3 }] }
];

const TaskBoard: NextPage<TaskBoardProps> = () => {
  const [statuses, setStatuses] = useState<Status[]>(Statuses);

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
            return <StatusColumn key={id} addTask={name === 'To do'} status={status} />;
          })}
        </StatusesContainer>
      </DragDropContext>
    </Menu>
  );
};

export default TaskBoard;
