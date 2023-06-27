import { Knex } from 'knex';

interface ProjectModel {
  id: string;
  name: string;
  color: string;
}

const ProjectSchema = {
  id: 'primary',
  name: 'string',
  color: 'string'
};

const createProject = async (knex: Knex, project: ProjectModel): Promise<void> => {
  await knex('projects').insert(project);
};

const getProjects = async (knex: Knex): Promise<ProjectModel[]> => {
  return knex('projects').select('*');
};

export { ProjectModel, ProjectSchema, createProject, getProjects };
