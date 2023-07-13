import type { Knex } from 'knex';

const addCommonColumns = (table: Knex.CreateTableBuilder) => {
  table.string('createdBy').notNullable().defaultTo('system');
  table.string('updatedBy').notNullable().defaultTo('system');
  table.timestamps(true, true);
};

export async function up(knex: Knex) {
  await knex.schema.dropTableIfExists('tasks');
  await knex.schema.dropTableIfExists('statuses');
  await knex.schema.dropTableIfExists('comments');
  await knex.schema.dropTableIfExists('projects');
  await knex.schema.dropTableIfExists('users');

  await knex.schema.createTable('tasks', function (table) {
    table.string('id').primary();
    table.string('title').notNullable();
    table.string('statusId').notNullable();
    table.string('description').notNullable();
    table.integer('priorityId').notNullable();
    addCommonColumns(table);
  });

  await knex.schema.createTable('comments', (table: Knex.CreateTableBuilder) => {
    table.string('id').primary();
    table.string('taskId').notNullable();
    addCommonColumns(table);

    // Define other columns as needed
  });

  await knex.schema.createTable('projects', (table: Knex.CreateTableBuilder) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('color').notNullable();
    addCommonColumns(table);
    // Define other columns as needed
  });

  await knex.schema.createTable('statuses', (table: Knex.CreateTableBuilder) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.integer('step').notNullable();
    addCommonColumns(table);

    // Define other columns as needed
  });

  await knex.schema.createTable('users', (table) => {
    table.string('id').primary();
    table.string('nick');
    table.string('email').notNullable();
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('password').notNullable();
    addCommonColumns(table);
  });
}

export async function down(knex: Knex) {
  await knex.schema.dropTableIfExists('tasks');
  await knex.schema.dropTableIfExists('statuses');
  await knex.schema.dropTableIfExists('comments');
  await knex.schema.dropTableIfExists('projects');
  await knex.schema.dropTableIfExists('users');
  await knex.schema.dropTableIfExists('sessions');
}
