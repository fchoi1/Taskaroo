import React from 'react';
import { ChevronsLeft, ChevronsRight } from 'react-feather';

import { Project } from '../../utils/Interfaces';
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
  currentProject: Project;
  setCurrentProject: React.Dispatch<React.SetStateAction<Project>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen = true,
  projectName,
  toggleSidebar,
  currentProject,
  setCurrentProject
}) => {
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
          <ProjectsSection
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
            isOpen={isOpen}
          />
        </SectionContainer>
      </SidebarMenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
