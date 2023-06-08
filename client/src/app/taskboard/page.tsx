'use client';

import { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

// import Modal from '../../components/common/Modal';
import BaseInterface from '../../BaseInterface';
import Menu from '../../components/Menu';
import StatusColumn from '../../components/StatusColumn';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

export const StatusesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface TaskBoardProps extends BaseInterface {
  // Define the props interface here if needed
}

interface Task {
  id: number;
  title: string;
  statusId: number;
}

interface Status {
  id: number;
  name: string;
}

const TaskBoard: NextPage<TaskBoardProps> = () => {
  const Statuses: Status[] = [
    { id: 1, name: 'To do' },
    { id: 2, name: 'In Progress' },
    { id: 3, name: 'Done' }
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

  // Preprocess data
  const tasksByStatus: Record<number, Task[]> = {};
  Tasks.forEach((task) => {
    if (tasksByStatus[task.statusId]) {
      tasksByStatus[task.statusId].push(task);
    } else {
      tasksByStatus[task.statusId] = [task];
    }
  });

  console.log('sorted tasks', Tasks);
  return (
    <Menu>
      <StatusesContainer>
        {Statuses.map(({ name, id }) => (
          <StatusColumn key={id} name={name} addTask={name === 'To do'}>
            {tasksByStatus[id]?.map(({ id, title }) => (
              <Card
                key={id}
                title={title}
                onClick={(e) => {
                  console.log('card  clicked', e);
                }}
              />
            ))}
          </StatusColumn>
        ))}
      </StatusesContainer>
      {/* <Modal title="Modal title"></Modal> */}
      {/* <Button
        onClick={() => {
          console.log('clicked button here');
        }}
      >
        Button
      </Button>
      <Link href="/">main</Link>
      <div> This is the about with stuff</div>; */}
    </Menu>
  );
};

export default TaskBoard;
