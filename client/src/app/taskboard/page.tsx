'use client';

import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import ProjectHeader from '../../components/CurrentProjectHeader';
import Menu from '../../components/Menu';
import StatusColumn from '../../components/StatusColumn';
import { useTaskContext } from '../../context/taskContext';
import { Project, Status } from '../../utils/Interfaces';
import { StatusesContainer } from './Taskboard.styles';
import { assignTasksToStatuses, handleDragEnd } from './taskboardUtils';

interface TaskBoardProps {
  // Define the props interface here if needed
  children: React.ReactNode;
}

const TaskBoard: NextPage<TaskBoardProps> = (props) => {
  console.log('task page props', props);
  const { tasks, statuses: statusesTestData, projects: ProjectsTestData } = useTaskContext();

  //  get statuses somehow from project api
  const [statuses, setStatuses] = useState<Status[]>(
    assignTasksToStatuses(tasks ?? [], [...statusesTestData])
  );

  const [currentProject, setCurrentProject] = useState<Project>(ProjectsTestData[0]);

  //current project saved in  local  storage or  defaulted  to  first one

  //  get projects somehow from project api
  useEffect(() => {
    const initialStatuses = assignTasksToStatuses(tasks, statusesTestData);
    setStatuses(initialStatuses);
  }, [tasks, statusesTestData]);

  //  Run once on render
  useEffect(() => {
    const currentProject = localStorage.getItem('currentProject');
    if (currentProject) setCurrentProject(JSON.parse(currentProject));
    console.log('Retrieved data:', currentProject);
  }, []);

  return (
    <Menu currentProject={currentProject} setCurrentProject={setCurrentProject}>
      <DragDropContext
        onDragEnd={(result: DropResult) => handleDragEnd(result, statuses, setStatuses)}
      >
        <ProjectHeader color={currentProject.color} currentProject={currentProject} />
        <StatusesContainer>
          {statuses.map((status) => {
            const { id, name } = status;
            return (
              <StatusColumn
                key={id}
                showAddTaskButton={name === 'To do'}
                status={status}
              />
            );
          })}
        </StatusesContainer>
      </DragDropContext>
    </Menu>
  );
};

export default TaskBoard;
