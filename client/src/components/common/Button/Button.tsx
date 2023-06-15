import React from 'react';

import BaseInterface from '../../../BaseInterface';
import { StyledButton } from './Button.styles';

interface ButtonProps extends BaseInterface {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children, color }) => {
  return (
    <StyledButton className={className} onClick={onClick} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
