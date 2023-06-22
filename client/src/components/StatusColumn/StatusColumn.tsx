import React from 'react';
import { DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

import BaseInterface from '../../BaseInterface';
import { useTaskContext } from '../../context/taskContext';
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
  showAddTaskButton?: boolean;
  status: Status;
}

const StatusColumn: React.FC<StatusColumnProps> = (props) => {
  const { status, showAddTaskButton = false } = props;
  const { id: statusId, name: statusName, step, tasks } = status;

  const { addTask } = useTaskContext();
  
  // TODO: add  a modal to add new tasks
  const newTask = {
    id: uuidv4(),
    title: 'Task 12',
    statusId,
    description: 'new description here',
    priorityId: 1,
    comments: []
  };

  return (
    <StatusContainer>
      <StatusHeader>
        <StatusTitle>{statusName}</StatusTitle>
        {showAddTaskButton && (
          <AddTaskButton onClick={() => addTask(newTask)}>Add Task</AddTaskButton>
        )}
      </StatusHeader>
      <ColorSeparatorBar />
      <Droppable droppableId={`status-${step}`}>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => {
          return (
            <TasksContiner
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {tasks &&
                tasks
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
