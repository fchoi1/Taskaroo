// components/Button/Button.tsx
import React from "react";
import CardProps from "./Card.interface";

import {
  CardContent,
  CardDescription,
  CardDiv,
  CardFooter,
  CardTitle,
} from "./Card.styles";

const Card: React.FC<CardProps> = ({ onClick, children }) => {
  return (
    <CardDiv onClick={onClick}>
      <CardTitle>Title</CardTitle>
      <CardDescription>Description</CardDescription>
      <CardContent>Test Content {children}</CardContent>
      <CardFooter>Footer</CardFooter>
    </CardDiv>
  );
};

export default Card;
