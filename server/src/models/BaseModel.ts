import { Model, Modifiers } from 'objection';

class BaseModel extends Model {
  createdBy?: string;
  createdAt?: Date;
  updatedBy: string;
  updatedAt?: Date;
  static get modelPaths() {
    return [__dirname];
  }

  static modifiers: Modifiers = {
    $beforeInsert(context) {
      const ctx: any = context;
      this.createdBy = ctx.user.id ? ctx.user.id : 'system';
      this.createdAt = new Date();
    },
    $beforeUpdate(opt, context) {
      this.updatedAt = new Date();
    }
  };
}

export default BaseModel;
