import { faker } from '@faker-js/faker';
import type { Knex } from 'knex';
import { ProjectModel, StatusModel, TaskModel, UserModel } from '../../models';

export async function seed(knex: Knex): Promise<void> {
  const statusIds = [];
  const statuses = Array.from({ length: 10 }).map((_, index) => {
    const newId = faker.string.uuid();
    statusIds.push(newId);
    return {
      id: newId,
      name: faker.company.buzzVerb(),
      step: Number(index)
    };
  });

  const tasks = Array.from({ length: 10 }).map(() => {
    const randomIndex = Math.floor(Math.random() * statusIds.length);
    return {
      id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      statusId: statusIds[randomIndex],
      description: faker.lorem.paragraph(),
      priorityId: faker.number.int({ max: 100 })
    };
  });

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
      name: faker.internet.displayName({ firstName, lastName }),
      email,
      firstName,
      lastName,
      password: '123456',
      emailVerified: faker.date.recent({ days: 10 }),
      image: faker.image.url()
    };
  });

  users.push({
    id: faker.string.uuid(),
    name: 'taskaroo tester',
    email: 'test@test.com',
    firstName: 'taskaroo',
    lastName: 'tester',
    password: '123456',
    emailVerified: new Date(Date.now()),
    image: faker.image.url()
  });

  await knex<TaskModel>('tasks').del();
  await knex<StatusModel>('statuses').del();
  await knex<ProjectModel>('projects').del();
  await knex<UserModel>('users').del();

  await StatusModel.query(knex).insert(statuses);
  await TaskModel.query(knex).insert(tasks);
  await ProjectModel.query(knex).insert(projects);
  await UserModel.query(knex).insert(users);
}
