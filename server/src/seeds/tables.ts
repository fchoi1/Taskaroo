import knex from '../db';

const createTables = async () => {
  await knex.schema.createTable('tasks', (table) => {
    table.uuid('id').primary();
    table.string('title').notNullable();
    table.string('statusId').notNullable();
    table.string('description').notNullable();
    table.integer('priorityId').notNullable();
    // Define other columns as needed
  });

  await knex.schema.createTable('comments', (table) => {
    table.uuid('id').primary();
    table.string('taskId').notNullable();
    // Define other columns as needed
  });

  await knex.schema.createTable('projects', (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('color').notNullable();
    // Define other columns as needed
  });

  await knex.schema.createTable('statuses', (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.integer('step').notNullable();
    // Define other columns as needed
  });

  // Create other tables here if necessary
};
const deleteTables = async () => {
  await knex.schema.dropTableIfExists('tasks');
  await knex.schema.dropTableIfExists('statuses');
  await knex.schema.dropTableIfExists('comments');
  await knex.schema.dropTableIfExists('projects');
  // Drop other tables here if necessary
};

export { createTables, deleteTables };
