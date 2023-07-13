import { Model, Modifiers } from 'objection';

class BaseModel extends Model {
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
  static get modelPaths() {
    return [__dirname];
  }

  static modifiers: Modifiers = {
    $beforeInsert(context: any) {
      this.createdBy = context.user.id ? context.user.id : 'system';
      this.createdAt = new Date();
    },
    $beforeUpdate(opt, context: any) {
      this.updatedBy = context.user.id ? context.user.id : 'system';
      this.updatedAt = new Date();
    }
  };
}

export default BaseModel;
