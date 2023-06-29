import { faker } from '@faker-js/faker';
import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  const tasks = Array.from({ length: 10 }).map(() => ({
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    statusId: faker.string.uuid(),
    description: faker.lorem.paragraph(),
    priorityId: faker.number.int({ max: 100 })
  }));

  const statuses = Array.from({ length: 10 }).map((_, index) => ({
    id: faker.string.uuid(),
    name: faker.word.noun({ length: { min: 5, max: 7 } }),
    step: Number(index)
  }));

  const projects = Array.from({ length: 10 }).map(() => ({
    id: faker.string.uuid(),
    name: faker.word.noun({ length: { min: 5, max: 7 } }),
    color: faker.color.human()
  }));

  await knex('tasks').del();
  await knex('statuses').del();
  await knex('projects').del();

  await knex('tasks').insert(tasks);
  await knex('statuses').insert(statuses);
  await knex('projects').insert(projects);
}
