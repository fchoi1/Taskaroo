import BaseModel from './BaseModel';

class UserModel extends BaseModel {
  id!: string;
  nick!: string;
  email!: string;
  firstname!: string;
  lastname!: string;

  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      // Define your table schema here
      // ...
    };
  }
}

export default UserModel;
