import BaseModel from './BaseModel';
import { UserModel } from '../models';

class SessionModel extends BaseModel {
  userId: string;
  expires: Date;
  sessionToken: string;

  static get tableName() {
    return 'sessions';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['userId', 'expires', 'sessionToken'],

      properties: {
        id: { type: 'string', format: 'uuid' },
        userId: { type: 'string', format: 'uuid' },
        expires: { type: 'string', format: 'date-time' },
        sessionToken: { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: UserModel.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'sessions.userId',
          to: 'users.id'
        }
      }
    };
  }
}

export default SessionModel;
