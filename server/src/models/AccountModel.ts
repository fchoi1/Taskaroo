import { UserModel } from '../models';
import BaseModel from './BaseModel';

class AccountModel extends BaseModel {
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
      type: 'object',
      required: ['userId'],
      properties: {
        id: { type: 'string' },
        userId: { type: 'string' },
        type: { type: 'string', minLength: 1 },
        provider: { type: 'string', minLength: 1 },
        providerAccountId: { type: 'string', minLength: 1 },
        refresh_token: { type: 'string', minLength: 1 },
        access_token: { type: 'string', minLength: 1 },
        expires_at: { type: 'number' },
        token_type: { type: 'string', minLength: 1 },
        scope: { type: 'string', minLength: 1 },
        id_token: { type: 'string', minLength: 1 },
        session_state: { type: 'string', minLength: 1 }
      }
    };
  }
}

export default AccountModel;
