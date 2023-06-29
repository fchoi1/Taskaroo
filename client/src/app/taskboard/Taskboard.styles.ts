import styled from 'styled-components';

import type { Theme } from '../../theme';

export const StatusesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CurrentProjectNameWrapper = styled.div<{ theme: Theme }>`
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 4px;
`;

export const CurrentProjectName = styled.h1<{ color: string; theme: Theme }>`
  font-size: 24px;
  color: #333333;
  margin: 0;
`;
