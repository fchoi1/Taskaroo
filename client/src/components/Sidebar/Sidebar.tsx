import React from 'react';
import { ChevronsLeft, ChevronsRight } from 'react-feather';

import MenuSection from '../MenuSection';
import ProjectsSection from '../ProjectsSection';
import {
  CollapseButton,
  ProjectName,
  ProjectNameContainer,
  SectionContainer,
  SeparatorBar,
  SidebarContainer,
  SidebarMenuContainer
} from './Sidebar.styles';

interface SidebarProps {
  projectName: string;
  toggleSidebar: () => void;
  isOpen?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, projectName, toggleSidebar }) => {
  return (
    <SidebarContainer>
      <ProjectNameContainer>
        <ProjectName> {isOpen ? projectName : projectName.slice(0, 2)}</ProjectName>
        <CollapseButton onClick={toggleSidebar}>
          {isOpen ? <ChevronsLeft /> : <ChevronsRight />}
        </CollapseButton>
      </ProjectNameContainer>
      <SidebarMenuContainer>
        <SectionContainer>
          <MenuSection isOpen={isOpen} />
        </SectionContainer>
        <SeparatorBar />
        <SectionContainer>
          <ProjectsSection isOpen={isOpen} />
        </SectionContainer>
      </SidebarMenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
