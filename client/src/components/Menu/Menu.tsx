import React, { useState } from 'react';

import { Project } from '../../utils/Interfaces';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { MainContent, MenuContainer, NavBarGrid, SidebarGrid } from './Menu.styles';

interface MeunProps {
  children: React.ReactNode;
  currentProject: Project;
  setCurrentProject: React.Dispatch<React.SetStateAction<Project>>;
}

const Menu: React.FC<MeunProps> = ({ children, currentProject, setCurrentProject }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <MenuContainer isOpen={isSidebarOpen}>
      <SidebarGrid>
        <Sidebar
          currentProject={currentProject}
          setCurrentProject={setCurrentProject}
          projectName="Name"
          toggleSidebar={toggleSidebar}
          isOpen={isSidebarOpen}
        />
      </SidebarGrid>
      <NavBarGrid>
        <Navbar name="test" />
      </NavBarGrid>
      <MainContent>{children}</MainContent>
    </MenuContainer>
  );
};

export default Menu;
