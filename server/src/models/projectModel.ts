import type { Knex } from 'knex';
import BaseModel from './BaseModel';

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

class ProjectModel extends BaseModel {}



export { ProjectModel, ProjectSchema };
