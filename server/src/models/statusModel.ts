import BaseModel from './BaseModel';

const StatusSchema = {
  id: 'primary',
  name: 'string',
  step: 'integer'
};

class StatusModel extends BaseModel {
  id!: string;
  name!: string;
  step!: number;

  static get tableName() {
    return 'tasks';
  }

  static get jsonSchema() {
    return {
      // Define your table schema here
      // ...
    };
  }
}

export { StatusModel, StatusSchema };
