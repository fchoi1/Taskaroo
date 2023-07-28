import express from 'express';
import routes from '../src/routes';

// Augment express-session with a custom SessionData object

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

export default app;
