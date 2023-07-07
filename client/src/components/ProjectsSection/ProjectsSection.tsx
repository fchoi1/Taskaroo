import { Dispatch, FC, SetStateAction, createElement } from 'react';
import { Circle, MoreHorizontal, PlusSquare, XCircle } from 'react-feather';

import { useTaskContext } from '../../context/taskContext';
import type { Project } from '../../utils/Interfaces';
import Button from '../common/Button';
import {
  MyProjectHeader,
  MyProjectHeaderContainer,
  ProjectList,
  ProjectListItem
} from './ProjectsSection.styles';

interface ProjectsSectionProps {
  isOpen: boolean;
  currentProject: Project;
  setCurrentProject: Dispatch<SetStateAction<Project>>;
}

// api  or something to get projects list, useEffect and useState

const ProjectsSection: FC<ProjectsSectionProps> = ({
  isOpen,
  currentProject,
  setCurrentProject
}) => {
  const { projects } = useTaskContext();

  const saveDataToLocalStorage = (project: Project): void => {
    localStorage.setItem('currentProject', JSON.stringify(project));
    console.log(`currentProject saved to local storage `);
  };

  const onProjectSave = (project: Project) => {
    setCurrentProject(project);
    saveDataToLocalStorage(project);
  };

  console.log('projects', projects, 'currrent project', currentProject);
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
        {projects &&
          projects.map((project) => {
            const { id, name, color } = project;
            return (
              <ProjectListItem
                key={id}
                color={color}
                isOpen={isOpen}
                onClick={() => {
                  onProjectSave(project);
                }}
              >
                {isOpen ? (
                  <>
                    {/* usually would be id, but it is rng rn so  set to name */}
                    {currentProject.name === name
                      ? createElement(XCircle)
                      : createElement(Circle)}{' '}
                    {name}
                  </>
                ) : (
                  <>
                    {name.slice(0, 3)}
                    {<MoreHorizontal />}
                  </>
                )}
              </ProjectListItem>
            );
          })}

        {/* Add more project items as needed */}
      </ProjectList>
    </>
  );
};

export default ProjectsSection;
