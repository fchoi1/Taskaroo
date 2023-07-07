import KnexSessionStoreConstructor from 'connect-session-knex';
import express from 'express';
import session from 'express-session';
import knex from './db';
import routes from './routes';
import { SessionUser } from './utils/Interfaces';

// Augment express-session with a custom SessionData object
declare module 'express-session' {
  export interface SessionData {
    user: SessionUser;
    loggedIn: boolean;
  }
}

const app = express();
const port = 8001;

const KnexSessionStore = KnexSessionStoreConstructor(session);
const sessionStore = new KnexSessionStore({
  knex, // Your Knex instance
  tablename: 'sessions',
  createtable: true
});

const sess = {
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: { secure: false }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));
app.use(routes);

if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
