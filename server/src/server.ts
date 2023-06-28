import express from 'express';
import taskRoutes from './routes/taskRoutes';

const app = express();
const port = 8001;

app.use(express.json());

app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
