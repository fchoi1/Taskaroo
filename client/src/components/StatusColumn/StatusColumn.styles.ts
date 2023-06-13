import styled from 'styled-components';

import { Theme } from '../../theme';
import Button from '../common/Button';

export const StatusTitle = styled.div<{ theme: Theme }>`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

export const TasksContiner = styled.div<{ theme: Theme; isDraggingOver: boolean }>`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${(props) => {
    console.log('props', props);
    const { theme, isDraggingOver } = props;
    return isDraggingOver ? 'lightblue' : theme.colors.secondary;
  }};
`;

export const StatusContainer = styled.div<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
`;

export const StatusHeader = styled.div<{ theme: Theme }>`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
`;

export const AddTaskButton = styled(Button)<{ theme: Theme }>`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const ColorSeparatorBar = styled.div<{ theme: Theme }>`
  height: 4px;
  background-color: #007bff;
  margin-bottom: 16px;
`;
