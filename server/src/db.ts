import * as dotenv from 'dotenv';
import { Knex, knex } from 'knex';

dotenv.config();

const dbConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME || 'taskaroo',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password'
  }
};

const db = knex(dbConfig);

export default db;
