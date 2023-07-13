import { faker } from '@faker-js/faker';
import type { Knex } from 'knex';
import { ProjectModel, StatusModel, TaskModel, UserModel } from '../../models';

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
    name: faker.company.buzzVerb(),
    step: Number(index)
  }));

  const projects = Array.from({ length: 10 }).map(() => ({
    id: faker.string.uuid(),
    name: faker.company.name(),
    color: faker.color.human()
  }));

  const users = Array.from({ length: 10 }).map(() => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({
      firstName,
      lastName,
      provider: 'test.com'
    });
    return {
      id: faker.string.uuid(),
      nick: faker.internet.displayName({ firstName, lastName }),
      email,
      firstName,
      lastName,
      password: '123456'
    };
  });

  users.push({
    id: faker.string.uuid(),
    nick: 'taskaroo tester',
    email: 'test@test.com',
    firstName: 'taskaroo',
    lastName: 'tester',
    password: '123456'
  });

  await knex<TaskModel>('tasks').del();
  await knex<StatusModel>('statuses').del();
  await knex<ProjectModel>('projects').del();
  await knex<UserModel>('users').del();

  await TaskModel.query(knex).insert(tasks);
  await StatusModel.query(knex).insert(statuses);
  await ProjectModel.query(knex).insert(projects);
  await UserModel.query(knex).insert(users);
}
