import * as dotenv from 'dotenv';
import { knex, type Knex } from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';

dotenv.config();

export const dbConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME || 'taskaroo',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password'
  },
  ...knexSnakeCaseMappers()
};

const db = knex(dbConfig);

Model.knex(db);

export default db;
