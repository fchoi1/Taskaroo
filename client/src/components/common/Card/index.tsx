import React from 'react';

import BaseInterface from '../../../BaseInterface';
import { CardContent, CardDescription, CardContainer, CardFooter, CardTitle } from './Card.styles';

interface CardProps extends BaseInterface {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
  title: string;
}

const Card: React.FC<CardProps> = ({ onClick, title, children }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>Description</CardDescription>
      <CardContent>Test Content {children}</CardContent>
      <CardFooter>Footer</CardFooter>
    </CardContainer>
  );
};

export default Card;
