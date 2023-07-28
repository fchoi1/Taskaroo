import type { Knex } from 'knex';
import { knexSnakeCaseMappers } from 'objection';
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
    },
    ...knexSnakeCaseMappers()
  },

  production: {
    ...dbConfig,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    },
    ...knexSnakeCaseMappers()
  }
};

module.exports = config;
