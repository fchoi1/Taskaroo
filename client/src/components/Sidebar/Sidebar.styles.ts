import styled from 'styled-components';

import { Theme } from '../../theme';
import Button from '../common/Button';

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  top: 0;
  height: 100vh;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.background.color};
  width: ${({ isOpen }) => (isOpen ? '200px' : '50px')};
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: ${({ theme }) => theme.sizes.navBar.height} 1fr;
  gap: 1em;
`;

export const SidebarMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuButton = styled(Button)`
  margin: 5px;
`;

export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px dotted red;
`;
export const ProjectNameContainer = styled.div<{ theme: Theme }>`
  grid-row: 1;
  padding: 10px;
  border: red 3px dotted;
  display: flex;
  align-items: center;
  justify-content: 
  height: ${({ theme }) => theme.sizes.navBar.height};
`;

export const ProjectName = styled.h1<{ theme: Theme; isOpen: boolean }>`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.primary.color};
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'None')};
  align-items: center;
  margin-right: 10px;
`;

export const CollapseButton = styled.button<{ theme: Theme }>`
  color: lightblue;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
`;

export const ProjectListContainer = styled.div`
  display: flex;
`;

export const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ProjectListItem = styled.li<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.primary.color};
  margin-bottom: 8px;
`;
