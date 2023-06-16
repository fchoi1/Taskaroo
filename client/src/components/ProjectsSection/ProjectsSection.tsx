import React, { createElement, useState } from 'react';
import { Circle, MoreHorizontal, PlusSquare, XCircle } from 'react-feather';

import { Project } from '../../utils/Interfaces';
import Button from '../common/Button';
import {
  MyProjectHeader,
  MyProjectHeaderContainer,
  ProjectList,
  ProjectListItem
} from './ProjectsSection.styles';

interface ProjectsSectionProps {
  isOpen: boolean;
}

// api  or something to get projects list, useEffect and useState
const Projects: Project[] = [
  { name: 'Project 1', color: 'primary', id: 1 },
  { name: 'Project 2', color: 'secondary', id: 2 },
  { name: 'Project 3', color: 'accent', id: 3 }
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isOpen }) => {
  const [currentProject, setCurrentProject] = useState(Projects[0].id);

  return (
    <>
      <MyProjectHeaderContainer isOpen={isOpen}>
        {isOpen ? (
          <>
            <MyProjectHeader>My Projects</MyProjectHeader>
            <Button color="primary">
              <PlusSquare />
            </Button>
          </>
        ) : (
          <Button>
            <PlusSquare />
          </Button>
        )}
      </MyProjectHeaderContainer>

      <ProjectList>
        {Projects &&
          Projects.map(({ id, name, color }) => (
            <ProjectListItem
              key={id}
              color={color}
              isOpen={isOpen}
              onClick={() => {
                setCurrentProject(id);
              }}
            >
              {isOpen ? (
                <>
                  {currentProject === id ? createElement(XCircle) : createElement(Circle)} {name}
                </>
              ) : (
                <>
                  {name.slice(0, 3)}
                  {<MoreHorizontal />}
                </>
              )}
            </ProjectListItem>
          ))}

        {/* Add more project items as needed */}
      </ProjectList>
    </>
  );
};

export default ProjectsSection;
