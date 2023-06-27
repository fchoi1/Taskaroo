import { Knex } from 'knex';

interface StatusModel {
  id: string;
  name: string;
  step: number;
}

const StatusSchema = {
  id: 'primary',
  name: 'string',
  step: 'integer'
};

const createStatus = async (knex: Knex, status: StatusModel): Promise<void> => {
  await knex('statuses').insert(status);
};

const getStatuses = async (knex: Knex): Promise<StatusModel[]> => {
  return knex('statuses').select('*');
};

export { StatusModel, StatusSchema, createStatus, getStatuses };
