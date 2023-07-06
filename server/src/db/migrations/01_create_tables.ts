import type { Knex } from 'knex';

const addCommonColumns = (table: Knex.CreateTableBuilder, knex: Knex) => {
  table.string('createdBy').notNullable().defaultTo('system');
  table.string('updatedBy').notNullable().defaultTo('system');
  table.timestamp('createdAt').defaultTo(knex.fn.now());
  table.timestamp('updatedAt').defaultTo(knex.fn.now());
};

export async function up(knex: Knex) {
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
    addCommonColumns(table, knex);
  });

  await knex.schema.createTable('comments', (table: Knex.CreateTableBuilder) => {
    table.string('id').primary();
    table.string('taskId').notNullable();
    addCommonColumns(table, knex);

    // Define other columns as needed
  });

  await knex.schema.createTable('projects', (table: Knex.CreateTableBuilder) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('color').notNullable();
    addCommonColumns(table, knex);
    // Define other columns as needed
  });

  await knex.schema.createTable('statuses', (table: Knex.CreateTableBuilder) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.integer('step').notNullable();
    addCommonColumns(table, knex);

    // Define other columns as needed
  });

  // await knex.schema.createTable('sessions', (table) => {
  //   table.string('sid').primary();
  //   table.json('sess').notNullable();
  //   table.timestamp('expired').notNullable();
  //   addCommonColumns(table, knex);
  // });
}

export async function down(knex: Knex) {
  await knex.schema.dropTableIfExists('tasks');
  await knex.schema.dropTableIfExists('statuses');
  await knex.schema.dropTableIfExists('comments');
  await knex.schema.dropTableIfExists('projects');
  await knex.schema.dropTableIfExists('sessions');
}
