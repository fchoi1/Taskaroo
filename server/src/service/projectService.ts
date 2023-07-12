import knex from '../db';
import type { Project } from '../utils/Interfaces';

const projectService = {
  createProject: async (project: Project): Promise<void> => {
    await knex('projects').insert(project);
  },

  getProjects: async (): Promise<Project[]> => {
    return knex('projects').select('*');
  }

  // Add other functions here as needed
};

export default projectService;
