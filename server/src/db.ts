import * as dotenv from 'dotenv';
import { Knex, knex } from 'knex';

dotenv.config();

const dbConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  }
};

const db = knex(dbConfig);

export default db;
