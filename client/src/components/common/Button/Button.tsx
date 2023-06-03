// components/Button/Button.tsx
import React from 'react';
import { StyledButton } from './Button.styles';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
  }
  
const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
