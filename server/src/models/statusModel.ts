import BaseModel from './BaseModel';

class StatusModel extends BaseModel {
  name!: string;
  step!: number;

  static get tableName() {
    return 'statuses';
  }

  static get jsonSchema() {
    return {
      // Define your table schema here
      // ...
    };
  }
}

export default StatusModel;
