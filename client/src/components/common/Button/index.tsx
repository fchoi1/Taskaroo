import React from 'react';

import BaseInterface from '../../../BaseInterface';
import { useTheme } from '../../../theme/ThemeProvider';
import { StyledButton } from './Button.styles';

interface ButtonProps extends BaseInterface {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, backgroundColor, color }) => {
  const theme = useTheme();

  return (
    <StyledButton theme={theme} onClick={onClick} backgroundColor={backgroundColor} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
