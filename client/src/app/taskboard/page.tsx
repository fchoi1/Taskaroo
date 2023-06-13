'use client';

import { NextPage } from 'next';
import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

import BaseInterface from '../../BaseInterface';
import Menu from '../../components/Menu';
import StatusColumn from '../../components/StatusColumn';
import { Status, Task } from '../../components/utils/Interfaces';

export const StatusesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface TaskBoardProps extends BaseInterface {
  // Define the props interface here if needed
}
const Statuses: Status[] = [
  { id: 1, name: 'To do', tasks: [] },
  { id: 2, name: 'In Progress', tasks: [] },
  { id: 3, name: 'Done', tasks: [] }
];

const Tasks: Task[] = [
  { id: 1, title: 'Task 1', statusId: 1 },
  { id: 2, title: 'Task 2', statusId: 2 },
  { id: 3, title: 'Task 3', statusId: 2 },
  { id: 4, title: 'Task 4', statusId: 3 },
  { id: 5, title: 'Task 5', statusId: 1 },
  { id: 6, title: 'Task 6', statusId: 1 },
  { id: 7, title: 'Task 7', statusId: 2 },
  { id: 8, title: 'Task 8', statusId: 1 },
  { id: 9, title: 'Task 9', statusId: 1 },
  { id: 10, title: 'Task 10', statusId: 1 },
  { id: 11, title: 'Task 11', statusId: 1 }
];

const TaskBoard: NextPage<TaskBoardProps> = () => {
  const [tasks, setTasks] = useState<Task[]>(Tasks);
  const [columns, setColumns] = useState<Status[]>(Statuses);

  const handleDragEnd = (result: any) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    console.log('resultts', result, tasks, setTasks);
  };

  // const onDragEnd = (result, columns, setColumns) => {
  //   if (!result.destination) return;
  //   const { source, destination } = result;

  //   if (source.droppableId !== destination.droppableId) {
  //     const sourceColumn = columns[source.droppableId];
  //     const destColumn = columns[destination.droppableId];
  //     const sourceItems = [...sourceColumn.items];
  //     const destItems = [...destColumn.items];
  //     const [removed] = sourceItems.splice(source.index, 1);
  //     destItems.splice(destination.index, 0, removed);
  //     setColumns({
  //       ...columns,
  //       [source.droppableId]: {
  //         ...sourceColumn,
  //         items: sourceItems
  //       },
  //       [destination.droppableId]: {
  //         ...destColumn,
  //         items: destItems
  //       }
  //     });
  //   } else {
  //     const column = columns[source.droppableId];
  //     const copiedItems = [...column.items];
  //     const [removed] = copiedItems.splice(source.index, 1);
  //     copiedItems.splice(destination.index, 0, removed);
  //     setColumns({
  //       ...columns,
  //       [source.droppableId]: {
  //         ...column,
  //         items: copiedItems
  //       }
  //     });
  //   }
  // };

  return (
    <Menu>
      <DragDropContext onDragEnd={handleDragEnd}>
        <StatusesContainer>
          {Statuses.map((status) => {
            const { id, name } = status;
            return (
              <StatusColumn
                key={id}
                addTask={name === 'To do'}
                status={status}
                tasks={tasks}
                setTasks={setTasks}
              />
            );
          })}
        </StatusesContainer>
      </DragDropContext>
    </Menu>
  );
};

export default TaskBoard;
