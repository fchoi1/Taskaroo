import BaseModel from './BaseModel';

class ProjectModel extends BaseModel {
  id!: string;
  name!: string;
  color!: string;

  static get tableName() {
    return 'projects';
  }

  static get jsonSchema() {
    return {
      // Define your table schema here
      // ...
    };
  }
}

export default ProjectModel;
