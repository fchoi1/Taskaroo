import React from 'react';
import styled from 'styled-components';

import BaseInterface from '../../../BaseInterface';
import Theme from '../../../theme';
import { useTheme } from '../../../theme/ThemeProvider';

interface ButtonProps extends BaseInterface {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export const StyledButton = styled.button<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  const theme = useTheme();

  return (
    <StyledButton theme={theme} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
