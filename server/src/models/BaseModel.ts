import { Model } from 'objection';
import { v4 as uuidv4 } from 'uuid';
import { SessionUser } from '../utils/Interfaces';
class BaseModel extends Model {
  id: string;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
  currentUser: SessionUser;

  static idColumn = 'id';

  static get modelPaths() {
    return [__dirname];
  }

  async $beforeInsert(context: any) {
    await super.$beforeInsert(context);
    this.createdBy = context.currentUser ? context.currentUser.id : 'system';
    this.createdAt = new Date();
    this.updatedBy = this.createdBy;
    this.updatedAt = new Date();
    this.id = uuidv4();
  }

  $beforeUpdate(opt, context: any) {
    this.updatedBy = context.currentUser ? context.currentUser.id : 'system';
    this.updatedAt = new Date();
  }
}

export default BaseModel;
