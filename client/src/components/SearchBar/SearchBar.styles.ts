import styled from 'styled-components';

import type { Theme } from '../../theme';

export const SearchBarWrapper = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 4px;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 8px;
  font-size: 16px;
  outline: none;
`;

export const SearchIconContainer = styled.div`
  margin-right: 8px;
  color: #888;
`;
