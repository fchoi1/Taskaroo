import styled from 'styled-components';

import { Theme } from '../../theme';
import { StyledButton } from '../common/Button/Button.styles';

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  top: 0;
  height: 100vh;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.background.color};
  padding: 16px;
  width: ${({ isOpen }) => (isOpen ? '200px' : '50px')};
  display: grid;
  grid-template-columns: auto;
  grid-template-rows:
    calc(${({ theme }) => `${theme.sizes.navBar.height} + ${theme.sizes.navBar.padding}`})
    1fr;
`;

export const MenuSection = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
`;

export const ProjectName = styled.h1<{ theme: Theme }>`
  text-align: left;
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.primary.color};
  height: ${({ theme }) => theme.sizes.navBar.height};
  padding: ${({ theme }) => theme.sizes.navBar.padding};
  border: red 3px dotted;
  grid-row: 1;
`;

export const CollapseButton = styled(StyledButton)<{ theme: Theme }>`
  height: 20px;
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #ccc;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  height: 20px;
`;

export const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ProjectListItem = styled.li`
  margin-bottom: 8px;
`;
