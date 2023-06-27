import { Knex } from 'knex';
import knex from '../db';
import { CommentSchema, ProjectSchema, StatusSchema, TaskSchema } from '../models/schema';

const createTables = async (): Promise<void> => {
  await knex.schema.createTable('tasks', (table: Knex.CreateTableBuilder) => {
    createColumnsFromSchema(table, TaskSchema);
    // Define other columns as needed
  });

  await knex.schema.createTable('comments', (table: Knex.CreateTableBuilder) => {
    createColumnsFromSchema(table, CommentSchema);
    // Define other columns as needed
  });

  await knex.schema.createTable('projects', (table: Knex.CreateTableBuilder) => {
    createColumnsFromSchema(table, ProjectSchema);
    // Define other columns as needed
  });

  await knex.schema.createTable('statuses', (table: Knex.CreateTableBuilder) => {
    createColumnsFromSchema(table, StatusSchema);
    // Define other columns as needed
  });

  // Create other tables here if necessary
};

const createColumnsFromSchema = (
  table: Knex.CreateTableBuilder,
  schema: Record<string, string>
): void => {
  Object.entries(schema).forEach(([columnName, columnType]) => {
    switch (columnType) {
      case 'primary':
        table.uuid(columnName).primary();
        break;
      case 'uuid':
        table.uuid(columnName);
        break;
      case 'string':
        table.string(columnName).notNullable();
        break;
      case 'number':
      case 'integer':
        table.integer(columnName).notNullable();
        break;
      // Add more cases for other column types as needed
      default:
        throw new Error(`Unsupported column type: ${columnType}`);
    }
  });
};

const deleteTables = async () => {
  await knex.schema.dropTableIfExists('tasks');
  await knex.schema.dropTableIfExists('statuses');
  await knex.schema.dropTableIfExists('comments');
  await knex.schema.dropTableIfExists('projects');
  // Drop other tables here if necessary
};

export { createTables, deleteTables };
