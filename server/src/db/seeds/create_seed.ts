import { faker } from '@faker-js/faker';
import type { Knex } from 'knex';
import { ProjectModel, StatusModel, TaskModel } from '../../models';

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

  await knex<TaskModel>('tasks').del();
  await knex<StatusModel>('statuses').del();
  await knex<ProjectModel>('projects').del();

  await TaskModel.query(knex).insert(tasks);
  await StatusModel.query(knex).insert(statuses);
  await ProjectModel.query(knex).insert(projects);
}
