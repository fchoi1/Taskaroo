import type { Knex } from 'knex';

export async function up(knex: Knex){
  await knex.schema.dropTableIfExists('tasks');
  await knex.schema.dropTableIfExists('statuses');
  await knex.schema.dropTableIfExists('comments');
  await knex.schema.dropTableIfExists('projects');

  await knex.schema.createTable('tasks', function (table) {
    table.string('id').primary();
    table.string('title').notNullable();
    table.string('statusId').notNullable();
    table.string('description').notNullable();
    table.integer('priorityId').notNullable();
    table.string('createdBy');
    table.string('updatedBy');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });

  await knex.schema.createTable('comments', (table: Knex.CreateTableBuilder) => {
    table.string('id').primary();
    table.string('taskId').notNullable();
    // Define other columns as needed
  });

  await knex.schema.createTable('projects', (table: Knex.CreateTableBuilder) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('color').notNullable();
    // Define other columns as needed
  });

  await knex.schema.createTable('statuses', (table: Knex.CreateTableBuilder) => {
    table.string('id').primary();
    table.string('title').notNullable();
    table.string('statusId').notNullable();
    table.string('description').notNullable();
    table.string('name').notNullable();

    // Define other columns as needed
  });



}

export async function down(knex: Knex){
  await knex.schema.dropTable('tasks');
}
