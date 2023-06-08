import React from 'react';

import BaseInterface from '../../BaseInterface';
import { useTheme } from '../../theme/ThemeProvider';
import {
  AddTaskButton,
  ColorSeparatorBar,
  StatusContainer,
  StatusHeader,
  StatusTitle,
  TasksContiner
} from './StatusColumn.styles';

interface StatusColumnProps extends BaseInterface {
  children?: React.ReactNode;
  addTask?: boolean;
  name: string;
}

const StatusColumn: React.FC<StatusColumnProps> = ({ name, addTask = false, children }) => {
  const theme = useTheme();

  console.log('children:', children);

  return (
    <StatusContainer theme={theme}>
      <StatusHeader>
        <StatusTitle>{name}</StatusTitle>
        {addTask && <AddTaskButton>Add Task</AddTaskButton>}
      </StatusHeader>
      <ColorSeparatorBar />
      <TasksContiner>{children}</TasksContiner>
    </StatusContainer>
  );
};

export default StatusColumn;
