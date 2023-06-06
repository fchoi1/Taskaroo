import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

interface SidebarProps {
  projectName: string;
  toggleSidebar: () => void;
  isOpen?: boolean;
}

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  top: 0; /* Adjust the top value to your preference */
  top: 0;
  height: 100vh;
  width: 200px;
  background-color: #333333;
  padding: 16px;
  width: ${({ isOpen }) => (isOpen ? "200px" : "50px")};
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectName = styled.h1`
  text-align: right;
`;

const CollapseButton = styled(Button)`
  display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProjectListItem = styled.li`
  margin-bottom: 8px;
`;

const Sidebar: React.FC<SidebarProps> = ({
  isOpen = true,
  projectName,
  toggleSidebar,
}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <ProjectName>{projectName}</ProjectName>
      <CollapseButton onClick={toggleSidebar}>Collapse</CollapseButton>
      {isOpen && (
        <>
          <MenuSection>
            <Button>Home</Button>
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
