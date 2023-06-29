import type { Knex } from 'knex';
import path from 'path';
import { dbConfig } from './src/db';
// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    ...dbConfig,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    }
  },

  production: {
    ...dbConfig,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    }
  }
};

module.exports = config;
