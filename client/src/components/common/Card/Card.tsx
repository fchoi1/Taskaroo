import React from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';

import type { Task } from '../../../utils/Interfaces';
import { CardContainer, CardContent, CardDescription, CardFooter, CardTitle } from './Card.styles';

interface CardProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
  task: Task;
  index: number;
}

const Card: React.FC<CardProps> = ({ onClick, children, task, index }) => {
  const { title, id } = task;

  return (
    <Draggable draggableId={`task-${id}`} index={index} key={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <CardContainer
          onClick={onClick}
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardTitle>{title}</CardTitle>
          <CardDescription>Description</CardDescription>
          <CardContent>Test Content {children}</CardContent>
          <CardFooter>Footer</CardFooter>
        </CardContainer>
      )}
    </Draggable>
  );
};

export default Card;
