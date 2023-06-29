import { Router, type Request, type Response } from 'express';

import commentRoutes from './commentRoutes';
import projectRoutes from './projectRoutes';
import statusRoutes from './statusRoutes';
import taskRoutes from './taskRoutes';

const apiRouter: Router = Router();

apiRouter.use('/task', taskRoutes);
apiRouter.use('/status', statusRoutes);
apiRouter.use('/project', projectRoutes);
apiRouter.use('/comment', commentRoutes);

// Catch-all route for undefined routes
apiRouter.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handling middleware
apiRouter.use((err: Error, req: Request, res: Response) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

export default apiRouter;
