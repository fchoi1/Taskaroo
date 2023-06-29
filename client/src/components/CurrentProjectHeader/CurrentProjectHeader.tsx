import React from 'react';
import { Edit3, Link2 } from 'react-feather';

import type { Project } from '../../utils/Interfaces';
import { CurrentProjectName, CurrentProjectNameContainer } from './CurrentProjectHeader.styles';

interface ProjectHeaderProps {
  currentProject: Project;
  color: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ color, currentProject }) => {
  return (
    <CurrentProjectNameContainer>
      <CurrentProjectName color={color}>{currentProject.name}</CurrentProjectName>
      <Edit3 />
      <Link2 />
    </CurrentProjectNameContainer>
  );
};

export default ProjectHeader;
