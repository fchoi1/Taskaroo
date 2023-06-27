import React, { useState } from 'react';
import { DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';

import { Status } from '../../utils/Interfaces';
import NewTaskModal from '../NewTaskModal';
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

interface StatusColumnProps {
  children?: React.ReactNode;
  showAddTaskButton?: boolean;
  status: Status;
}

const StatusColumn: React.FC<StatusColumnProps> = (props) => {
  const { status, showAddTaskButton = false } = props;
  const { id: statusId, name: statusName, step, tasks } = status;

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <StatusContainer>
      <StatusHeader>
        <StatusTitle>{statusName}</StatusTitle>
        {showAddTaskButton && (
          <AddTaskButton onClick={() => handleOpenModal()}>Add Task</AddTaskButton>
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
      {isModalOpen && <NewTaskModal statusId={statusId} onClose={handleCloseModal} />}
    </StatusContainer>
  );
};

export default StatusColumn;
