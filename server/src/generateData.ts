import knex from './db';
import { createTables, deleteTables } from './seeds/tables';
import { Project, Status, Task } from './utils/Interfaces';

import { faker } from '@faker-js/faker';

export async function seedTasks(): Promise<void> {
  const tasks: Task[] = Array.from({ length: 10 }).map(() => ({
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    statusId: faker.string.uuid(),
    description: faker.lorem.paragraph(),
    priorityId: faker.number.int({ max: 100 })
  }));

  await knex('tasks').insert(tasks);
}

export async function seedStatus(): Promise<void> {
  const statuses: Status[] = Array.from({ length: 10 }).map((_, index) => ({
    id: faker.string.uuid(),
    name: faker.word.noun({ length: { min: 5, max: 7 } }),
    step: Number(index)
    // tasks: []
  }));

  await knex('statuses').insert(statuses);
}

export async function seedProject(): Promise<void> {
  const projects: Project[] = Array.from({ length: 10 }).map(() => ({
    id: faker.string.uuid(),
    name: faker.word.noun({ length: { min: 5, max: 7 } }),
    color: faker.color.human()
  }));

  await knex('projects').insert(projects);
}

(async () => {
  try {
    console.log('Deleting tables');
    await deleteTables();
    console.log('Creating tables');
    await createTables();
    console.log('Running seed...');
    await seedTasks();
    await seedStatus();
    await seedProject();
    console.log('Seed completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error running seed:', error);
    process.exit(1);
  }
})();
