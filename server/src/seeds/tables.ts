import { Knex } from 'knex';

const createTables = async (knex: Knex) => {
  await knex.schema.createTable('tasks', (table) => {
    table.uuid('id').primary();
    table.string('title').notNullable();
    table.string('statusId').notNullable();
    table.string('description').notNullable();
    table.integer('priorityId').notNullable();
    // table.json('comments').defaultTo([]); // Add the "comments" column as JSON type

    // Define other columns as needed
  });

  // Create other tables here if necessary
};

const deleteTables = async (knex: Knex) => {
  await knex.schema.dropTableIfExists('tasks');
  // Drop other tables here if necessary
};

export { createTables, deleteTables };
