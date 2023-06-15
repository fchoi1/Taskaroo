import React, { useState } from 'react';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { MainContent, MenuContainer, NavBarGrid, SidebarGrid } from './Menu.styles';

interface MeunProps {
  children: React.ReactNode;
}

const Menu: React.FC<MeunProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <MenuContainer isOpen={isSidebarOpen}>
      <SidebarGrid>
        <Sidebar projectName="Name" toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
      </SidebarGrid>
      <NavBarGrid>
        <Navbar name="test" />
      </NavBarGrid>
      <MainContent>{children}</MainContent>
    </MenuContainer>
  );
};

export default Menu;
