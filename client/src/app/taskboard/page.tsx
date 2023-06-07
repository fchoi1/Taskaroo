'use client';

import { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';

// import Modal from '../../components/common/Modal';
import BaseInterface from '../../BaseInterface';
import Menu from '../../components/Menu';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import StatusColumn from '../../components/common/StatusColumn';

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
`;

interface TaskBoardProps extends BaseInterface {
  // Define the props interface here if needed
}

const TaskBoard: NextPage<TaskBoardProps> = () => {
  const Statuses = [{ name: 'To do' }, { name: 'In Progress' }, { name: 'Done' }];

  return (
    <Menu>
      <StatusContainer>
        {Statuses.map(({ name }, index) => (
          <StatusColumn key={index} name={name}>
            <Card
              key={name + index}
              onClick={(e) => {
                console.log('card  clicked', e);
              }}
            ></Card>
          </StatusColumn>
        ))}
      </StatusContainer>
      {/* <Modal title="Modal title"></Modal> */}
      <Button
        onClick={() => {
          console.log('clicked button here');
        }}
      >
        Button
      </Button>
      <Link href="/">main</Link>
      <div> This is the about with stuff</div>;
    </Menu>
  );
};

export default TaskBoard;
