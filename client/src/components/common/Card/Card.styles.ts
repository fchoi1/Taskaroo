// components/Button/Button.styles.ts
import styled from 'styled-components';
import CardProps from './Card.interface';

export const CardDiv = styled.div<CardProps>`
  background-color: black;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h3<CardProps>`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const CardDescription = styled.p<CardProps>`
  font-size: 14px;
  color: yellow;
`;

export const CardContent = styled.div<CardProps>`
  margin-top: 12px;
  color: red
`;

export const CardFooter = styled.div<CardProps>`
  margin-top: 12px;
  text-align: right;
  font-size: 12px;
  color: #999999;
`;
