import KnexSessionStoreConstructor from 'connect-session-knex';
import express from 'express';
import session from 'express-session';
import knex from '../src/db';
import routes from '../src/routes';
import { SessionUser } from '../src/utils/Interfaces';

// Augment express-session with a custom SessionData object
declare module 'express-session' {
  export interface SessionData {
    user?: SessionUser;
    loggedIn?: boolean;
    token?: string;
  }
}

const app = express();

const KnexSessionStore = KnexSessionStoreConstructor(session);
const sessionStore = new KnexSessionStore({
  knex, // Your Knex testing instance
  tablename: 'sessions',
  createtable: true,
  clearInterval: 1000 * 60 * 60
});

const sess = {
  secret: 'secret-key', 
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false
  }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));
app.use(routes);

export default app;
