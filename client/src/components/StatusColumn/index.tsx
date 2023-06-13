import React from 'react';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';

import BaseInterface from '../../BaseInterface';
import { useTheme } from '../../theme/ThemeProvider';
import Card from '../common/Card';
import { Status } from '../utils/Interfaces';
import {
  AddTaskButton,
  ColorSeparatorBar,
  StatusContainer,
  StatusHeader,
  StatusTitle,
  TasksContiner
} from './StatusColumn.styles';

interface StatusColumnProps extends BaseInterface {
  children?: React.ReactNode;
  addTask?: boolean;
  status: Status;
}

const StatusColumn: React.FC<StatusColumnProps> = (props) => {
  const { status, addTask = false } = props;
  const { id: statusId, name: statusName, tasks, step } = status;

  const theme = useTheme();
  return (
    <StatusContainer theme={theme}>
      <StatusHeader>
        <StatusTitle>{statusName}</StatusTitle>
        {addTask && <AddTaskButton>Add Task</AddTaskButton>}
      </StatusHeader>
      <ColorSeparatorBar />
      <Droppable droppableId={`status-${step}`}>
        {(provided: DroppableProvided) => (
          <TasksContiner {...provided.droppableProps} ref={provided.innerRef}>
            {tasks
              .filter((task) => task.statusId === statusId)
              .map((task, index) => (
                <Card
                  index={index}
                  task={task}
                  key={task.id}
                  onClick={(e) => {
                    console.log('card  clicked', e);
                  }}
                />
              ))}
            {provided.placeholder}
          </TasksContiner>
        )}
      </Droppable>
    </StatusContainer>
  );
};

export default StatusColumn;
