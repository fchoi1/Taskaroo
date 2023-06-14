import styled from 'styled-components';

import { Theme } from '../../theme';
import Button from '../common/Button';

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  top: 0;
  height: 100vh;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  padding: 16px;
  width: ${({ isOpen }) => (isOpen ? '200px' : '50px')};
`;

export const MenuSection = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
`;

export const ProjectName = styled.h1<{ theme: Theme }>`
  text-align: left;
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.fontColor};
  height: ${({ theme }) => theme.sizes.navBar.height};
  padding: ${({ theme }) => theme.sizes.navBar.padding};
  border: red 3px dotted;
`;

export const CollapseButton = styled(Button)<{ theme: Theme }>`
  display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ProjectListItem = styled.li`
  margin-bottom: 8px;
`;
