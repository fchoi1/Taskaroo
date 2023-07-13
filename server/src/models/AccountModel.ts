import { UserModel } from '../models';
import BaseModel from './BaseModel';

class AccountModel extends BaseModel {
  id!: string;
  userId!: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string;
  access_token: string;
  expires_at: number;
  token_type: string;
  scope: string;
  id_token: string;
  session_state: string;

  static get tableName() {
    return 'accounts';
  }

  static get relationMappings() {
    return {
      user: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'accounts.userId',
          to: 'users.id'
        }
      }
    };
  }

  static get jsonSchema() {
    return {
      // Define your table schema here
      // ...
    };
  }
}

export default AccountModel;
