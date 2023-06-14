import React from 'react';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';

import BaseInterface from '../../../BaseInterface';
import { useTheme } from '../../../theme/ThemeProvider';
import { Task } from '../../utils/Interfaces';
import { CardContainer, CardContent, CardDescription, CardFooter, CardTitle } from './Card.styles';

interface CardProps extends BaseInterface {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
  task: Task;
  index: number;
}

const Card: React.FC<CardProps> = ({ onClick, children, task, index }) => {
  const { title, id } = task;
  const theme = useTheme();

  return (
    <Draggable draggableId={`task-${id}`} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <CardContainer
          onClick={onClick}
          isDragging={snapshot.isDragging}
          theme={theme}
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
