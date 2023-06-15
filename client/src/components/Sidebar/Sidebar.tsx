import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faAnglesLeft,
  faAnglesRight,
  faEllipsis,
  faGear,
  faHouse,
  faListCheck,
  faMessage,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons';
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
  SeparatorBar,
  SidebarContainer,
  SidebarMenuContainer
} from './Sidebar.styles';

interface SidebarProps {
  projectName: string;
  toggleSidebar: () => void;
  isOpen?: boolean;
}

interface MenuType {
  name: string;
  icon: IconDefinition;
  color: string;
}

const MenuButtons: MenuType[] = [
  { name: 'Home', color: 'primary', icon: faHouse },
  { name: 'Messages', color: 'secondary', icon: faMessage },
  { name: 'Tasks', color: 'background', icon: faListCheck },
  { name: 'Members', color: 'text', icon: faUserGroup },
  { name: 'Settings', color: 'accent', icon: faGear },
  { name: 'Success', color: 'success', icon: faHouse },
  { name: 'warning', color: 'warning', icon: faHouse },
  { name: 'error', color: 'error', icon: faHouse }
];

const Projects = [
  { name: 'Project 1', color: 'primary' },
  { name: 'Project 2', color: 'secondary' },
  { name: 'Project 3', color: 'background' }
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, projectName, toggleSidebar }) => {
  // api  or something to get projects list
  return (
    <SidebarContainer>
      <ProjectNameContainer>
        <ProjectName> {isOpen ? projectName : 'N'}</ProjectName>
        <CollapseButton onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isOpen ? faAnglesLeft : faAnglesRight} />
        </CollapseButton>
      </ProjectNameContainer>
      <SidebarMenuContainer>
        <MenuSection>
          {MenuButtons &&
            MenuButtons.map(({ name, color, icon }, index) => (
              <MenuButton key={index} color={color} isOpen={isOpen}>
                {isOpen ? (
                  <>
                    <FontAwesomeIcon icon={icon} /> {name}
                  </>
                ) : (
                  <FontAwesomeIcon icon={icon} />
                )}
              </MenuButton>
            ))}
        </MenuSection>
        <SeparatorBar />
        <ProjectListContainer>
          {isOpen ? <div>My Projects</div> : null}

          <ProjectList>
            {Projects &&
              Projects.map(({ name, color }, index) => (
                <ProjectListItem key={index} color={color} isOpen={isOpen}>
                  {isOpen ? (
                    <>
                      {name}
                      <FontAwesomeIcon icon={faEllipsis} />
                    </>
                  ) : (
                    name.slice(0, 3) + '...'
                  )}
                </ProjectListItem>
              ))}

            {/* Add more project items as needed */}
          </ProjectList>
        </ProjectListContainer>
      </SidebarMenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
