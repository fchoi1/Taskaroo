import knex from '../db';
import type { Status } from '../utils/Interfaces';

const statusService = {
  createStatus: async (status: Status): Promise<void> => {
    await knex('statuses').insert(status);
  },

  getStatuses: async (): Promise<Status[]> => {
    return knex('statuses').select('*');
  }

  // Add other functions here as needed
};

export default statusService;
