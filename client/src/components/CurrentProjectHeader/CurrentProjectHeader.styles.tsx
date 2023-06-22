import styled from 'styled-components';

import { Theme } from '../../theme';


export const CurrentProjectNameContainer = styled.div<{ theme: Theme }>`
display: flex;  
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 4px;
`;

export const CurrentProjectName = styled.h1<{ color: string; theme: Theme }>`
  font-size: 24px;
  color: #333333;
  margin: 0;
`;
