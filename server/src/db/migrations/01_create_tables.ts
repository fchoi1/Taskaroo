import type { Knex } from 'knex';

const addCommonColumns = (table: Knex.CreateTableBuilder) => {
  table.string('createdBy').notNullable().defaultTo('system');
  table.string('updatedBy').notNullable().defaultTo('system');
  table.timestamps(true, true);
};

export async function up(knex: Knex) {
  await knex.schema.dropTableIfExists('comments');
  await knex.schema.dropTableIfExists('projects');
  await knex.schema.dropTableIfExists('sessions');
  await knex.schema.dropTableIfExists('accounts');
  await knex.schema.dropTableIfExists('tasks');
  await knex.schema.dropTableIfExists('users');
  await knex.schema.dropTableIfExists('statuses');

  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await knex.schema.createTable('statuses', (table: Knex.CreateTableBuilder) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name').notNullable();
    table.integer('step').notNullable();
    addCommonColumns(table);
  });

  await knex.schema.createTable('tasks', function (table) {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('title').notNullable();
    table.uuid('statusId').notNullable();
    table.string('description').notNullable();
    table.integer('priorityId').notNullable();

    table.foreign('statusId').references('id').inTable('statuses');

    addCommonColumns(table);
  });

  await knex.schema.createTable('comments', (table: Knex.CreateTableBuilder) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('taskId').notNullable();

    table.foreign('taskId').references('id').inTable('tasks');

    addCommonColumns(table);
  });

  await knex.schema.createTable('projects', (table: Knex.CreateTableBuilder) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name').notNullable();
    table.string('color').notNullable();
    addCommonColumns(table);
  });

  await knex.schema.createTable('users', (table: Knex.CreateTableBuilder) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name');
    table.string('email').notNullable().unique();
    table.string('firstName').notNullable();
    table.string('lastName');
    table.string('password');
    table.string('image');
    table.timestamp('emailVerified');
    addCommonColumns(table);
  });

  await knex.schema.createTable('accounts', (table: Knex.CreateTableBuilder) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('userId').notNullable();
    table.string('type');
    table.string('provider');
    table.string('providerAccountId');
    table.string('refresh_token');
    table.string('access_token');
    table.integer('expires_at');
    table.string('token_type');
    table.string('scope');
    table.string('id_token');
    table.string('session_state');

    table.foreign('userId').references('id').inTable('users');

    addCommonColumns(table);
  });

  await knex.schema.createTable('sessions', (table: Knex.CreateTableBuilder) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.timestamp('expires').notNullable();
    table.string('sessionToken').notNullable().unique();
    table.uuid('userId').notNullable();

    table.foreign('userId').references('id').inTable('users');

    addCommonColumns(table);
  });
}

export async function down(knex: Knex) {
  await knex.schema.dropTableIfExists('comments');
  await knex.schema.dropTableIfExists('projects');
  await knex.schema.dropTableIfExists('sessions');
  await knex.schema.dropTableIfExists('accounts');
  await knex.schema.dropTableIfExists('tasks');
  await knex.schema.dropTableIfExists('users');
  await knex.schema.dropTableIfExists('statuses');

  await knex.raw('DROP EXTENSION IF EXISTS "uuid-ossp"');
}
