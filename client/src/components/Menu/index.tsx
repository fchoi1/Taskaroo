import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import styled from "styled-components";

interface MeunProps {
  children: React.ReactNode;
}

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 100px 1fr;
  gap: 1em;
  height: 100vh;

  background-color: darkgrey;
  color: white;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 100px auto;
  }
`;

const SidebarGrid = styled(Sidebar)`
  grid-column: 1 / span 2;
  padding: 20px;

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

const NavBarGrid = styled(Navbar)`
  grid-column: 2;
  grid-row: 1;
  padding: 20px;

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 2;
  }
`;

const MainContent = styled.div`
  grid-column: 2;
  grid-row: 2;
  background-color: white;
  padding: 20px;

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 3;
  }
`;

const Menu: React.FC<MeunProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    console.log("Toggling toggle");
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <MenuContainer>
      <SidebarGrid
        projectName="Name"
        toggleSidebar={toggleSidebar}
        isOpen={isSidebarOpen}
      />
      <NavBarGrid name="test" />
      <MainContent>{children}</MainContent>
    </MenuContainer>
  );
};

export default Menu;
