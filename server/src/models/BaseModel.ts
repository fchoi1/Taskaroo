import addFormats from 'ajv-formats';
import { AjvValidator, JSONSchema, Model, Pojo, QueryContext } from 'objection';
import { v4 as uuidv4 } from 'uuid';
import knex from '../db';

Model.knex(knex);

interface CustomQueryContext extends QueryContext {
  currentUser?: string;
}
class BaseModel extends Model {
  id: string;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;

  static idColumn = 'id';

  static get modelPaths() {
    return [__dirname];
  }

  static createValidator() {
    return new AjvValidator({
      onCreateAjv: (ajv) => {
        addFormats(ajv);
      },
      options: {
        allErrors: true,
        validateSchema: false,
        ownProperties: true
      }
    });
  }

  $beforeValidate(jsonSchema: JSONSchema, json: Pojo) {
    if (!jsonSchema || Object.keys(jsonSchema).length === 0) return jsonSchema; // Return if jsonSchema is null, undefined, or empty
    for (const [propertyName, schema] of Object.entries(jsonSchema.properties)) {
      if (schema && (schema as JSONSchema).format === 'date-time') {
        const valueToValidate = json[propertyName];
        if (valueToValidate !== null && valueToValidate instanceof Date) {
          json[propertyName] = valueToValidate.toISOString();
        }
      }
    }
    return jsonSchema;
  }

  async $beforeInsert(context: CustomQueryContext) {
    await super.$beforeInsert(context);
    this.createdBy = context.currentUser ? context.currentUser : 'system';
    this.createdAt = new Date();
    this.updatedBy = this.createdBy;
    this.updatedAt = new Date();
    if (!this.id) {
      this.id = uuidv4();
    }
  }

  $beforeUpdate(opt, context: CustomQueryContext) {
    this.updatedBy = context.currentUser ? context.currentUser : 'system';
    this.updatedAt = new Date();
  }
}

export default BaseModel;
