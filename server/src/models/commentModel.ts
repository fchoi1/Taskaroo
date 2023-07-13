import BaseModel from './BaseModel';

class CommentModel extends BaseModel {
  id!: string;
  taskId: number;

  static get tableName() {
    return 'comments';
  }

  static get jsonSchema() {
    return {
      // Define your table schema here
      // ...
    };
  }
}

export default CommentModel;
