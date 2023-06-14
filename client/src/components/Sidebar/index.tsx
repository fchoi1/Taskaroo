import React from 'react';

import { useTheme } from '../../theme/ThemeProvider';
import Button from '../common/Button';
import {
  CollapseButton,
  MenuSection,
  ProjectList,
  ProjectListItem,
  ProjectName,
  SidebarContainer
} from './Sidebar.styles';

interface SidebarProps {
  projectName: string;
  toggleSidebar: () => void;
  isOpen?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, projectName, toggleSidebar }) => {
  const theme = useTheme();
  return (
    <SidebarContainer isOpen={isOpen} theme={theme}>
      <ProjectName theme={theme}>{projectName}</ProjectName>
      <CollapseButton theme={theme} onClick={toggleSidebar}>
        Collapse
      </CollapseButton>
      {isOpen && (
        <>
          <MenuSection>
            <Button color="accent">Home</Button>
            <Button>Messages</Button>
            <Button>Tasks</Button>
            <Button>Members</Button>
            <Button>Settings</Button>
          </MenuSection>

          <ProjectList>
            <ProjectListItem>Project 1</ProjectListItem>
            <ProjectListItem>Project 2</ProjectListItem>
            <ProjectListItem>Project 3</ProjectListItem>
            {/* Add more project items as needed */}
          </ProjectList>
        </>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
