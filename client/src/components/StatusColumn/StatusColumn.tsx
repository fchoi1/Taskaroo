import React, { useEffect } from 'react';
import { DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';

import BaseInterface from '../../BaseInterface';
import { Status } from '../../utils/Interfaces';
import Card from '../common/Card';
import { StrictModeDroppable as Droppable } from '../common/Droppable';
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

  useEffect(() => {
    // Debugging code or side effect logic here
    console.log('StatusColumn rendered', status);

    // Clean up any necessary resources or event listeners
    return () => {
      console.log('StatusColumn unmounted', status);
    };
  }, []);

  return (
    <StatusContainer>
      <StatusHeader>
        <StatusTitle>{statusName}</StatusTitle>
        {addTask && <AddTaskButton>Add Task</AddTaskButton>}
      </StatusHeader>
      <ColorSeparatorBar />
      <Droppable droppableId={`status-${step}`}>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => {
          console.log('Droppable rendering'); // Log the rendering of Droppable

          return (
            <TasksContiner
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
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
          );
        }}
      </Droppable>
    </StatusContainer>
  );
};

export default StatusColumn;
