import { Knex } from 'knex';
import db from './db';
import { createTables, deleteTables } from './seeds/tables';
import { Task } from './utils/Interfaces';

import { faker } from '@faker-js/faker';

export async function seed(knex: Knex): Promise<void> {
  const tasks: Task[] = Array.from({ length: 10 }).map(() => ({
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    statusId: faker.string.uuid(),
    description: faker.lorem.paragraph(),
    priorityId: faker.number.int({ max: 100 }),
    // comments: []
  }));

  await knex('tasks').insert(tasks);
}

(async () => {
  try {
    console.log('create and deleting tables');
    await deleteTables(db); // Delete existing tables if needed
    await createTables(db);
    console.log('Running seed...');
    await seed(db);
    console.log('Seed completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error running seed:', error);
    process.exit(1);
  }
})();
