import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import {
  CollapseButton,
  MenuButton,
  MenuSection,
  ProjectList,
  ProjectListContainer,
  ProjectListItem,
  ProjectName,
  ProjectNameContainer,
  SidebarContainer,
  SidebarMenuContainer
} from './Sidebar.styles';

interface SidebarProps {
  projectName: string;
  toggleSidebar: () => void;
  isOpen?: boolean;
}

const MenuButtons = [
  { name: 'Home', color: 'primary' },
  { name: 'Messages', color: 'secondary' },
  { name: 'Tasks', color: 'background' },
  { name: 'Members', color: 'text' },
  { name: 'Settings', color: 'accent' },
  { name: 'Success', color: 'success' },
  { name: 'warning', color: 'warning' },
  { name: 'error', color: 'error' }
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, projectName, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <ProjectNameContainer>
        <ProjectName isOpen={isOpen}>{projectName}</ProjectName>
        <CollapseButton onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isOpen ? faAnglesLeft : faAnglesRight} />
        </CollapseButton>
      </ProjectNameContainer>
      <SidebarMenuContainer>
        {isOpen && (
          <>
            <MenuSection>
              {MenuButtons &&
                MenuButtons.map(({ name, color }, index) => (
                  <MenuButton key={index} color={color}>
                    {name}
                  </MenuButton>
                ))}
            </MenuSection>
            <ProjectListContainer>
              <ProjectList>
                <ProjectListItem>Project 1</ProjectListItem>
                <ProjectListItem>Project 2</ProjectListItem>
                <ProjectListItem>Project 3</ProjectListItem>
                {/* Add more project items as needed */}
              </ProjectList>
            </ProjectListContainer>
          </>
        )}
      </SidebarMenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
