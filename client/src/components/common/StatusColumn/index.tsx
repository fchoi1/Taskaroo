import React from 'react';
import styled from 'styled-components';

import { useTheme } from '../../../theme/ThemeProvider';
import StatusColumnProps from './StatusColumn.interface';

export const StyledStatus = styled.div<StatusColumnProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin: 0 5px;
`;

const StatusColumn: React.FC<StatusColumnProps> = ({ name, children }) => {
  const theme = useTheme();

  console.log('children:', children);

  return (
    <StyledStatus name={name} theme={theme}>
      <h2>{name}</h2>
      {children}
    </StyledStatus>
  );
};

export default StatusColumn;
