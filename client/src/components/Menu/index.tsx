import React, { useState } from 'react';

import { useTheme } from '../../theme/ThemeProvider';
import { MainContent, MenuContainer, NavBarGrid, SidebarGrid } from './Menu.styles';

interface MeunProps {
  children: React.ReactNode;
}

const Menu: React.FC<MeunProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const theme = useTheme();
  return (
    <MenuContainer theme={theme}>
      <SidebarGrid projectName="Name" toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
      <NavBarGrid name="test" />
      <MainContent>{children}</MainContent>
    </MenuContainer>
  );
};

export default Menu;
