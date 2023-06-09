import { Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';

import type { Project } from '../../utils/Interfaces';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { MainContent, MenuContainer, NavBarGrid, SidebarGrid } from './Menu.styles';

interface MeunProps {
  children: ReactNode;
  currentProject: Project;
  setCurrentProject: Dispatch<SetStateAction<Project>>;
}

const Menu: FC<MeunProps> = ({ children, currentProject, setCurrentProject }) => {
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
