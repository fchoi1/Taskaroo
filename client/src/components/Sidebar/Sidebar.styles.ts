import styled from 'styled-components';

import { Theme } from '../../theme';
import Button from '../common/Button';

export const SidebarContainer = styled.div<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.colors.background.color};
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: ${({ theme }) => theme.sizes.navBar.height} 1fr;
  gap: 1em;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
  }
`;

export const SidebarMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuButton = styled(Button)<{ isOpen: boolean }>`
  margin: 5px;
  padding: 0.5em 1.2em;
  width: auto;
  display: flex;
  justify-content: ${({ isOpen }) => (isOpen ? 'flex-start' : 'center')};
  gap: 1em;
`;

export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px dotted red;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const ProjectNameContainer = styled.div<{ theme: Theme }>`
  grid-row: 1;
  padding: 10px;
  border: red 3px dotted;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.sizes.navBar.height};
  width: 100%;
`;

export const ProjectName = styled.h1<{ theme: Theme }>`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.primary.color};
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const CollapseButton = styled.button<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.secondary.color};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
`;

export const ProjectListContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const ProjectListItem = styled.li<{ theme: Theme; isOpen: boolean }>`
  color: ${({ theme }) => theme.colors.primary.color};
  margin-bottom: 8px;

  margin: 5px;
  padding: 0.5em 1.2em;
  width: auto;
  border-radius: 4px;

  display: flex;
  justify-content: ${({ isOpen }) => (isOpen ? 'space-between' : 'center')};
  gap: 1em;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.color};
  }
`;

export const SeparatorBar = styled.div<{ theme: Theme }>`
  height: 4px;
  background-color: ${({ theme }) => theme.colors.accent.color};
  margin-bottom: 16px;
`;
