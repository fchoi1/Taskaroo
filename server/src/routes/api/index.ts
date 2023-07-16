import { Router, type Request, type Response } from 'express';

import accountRoutes from './accountRoutes';
import authRoutes from './authRoutes';
import commentRoutes from './commentRoutes';
import projectRoutes from './projectRoutes';
import sessionRoutes from './sessionRoutes';
import statusRoutes from './statusRoutes';
import taskRoutes from './taskRoutes';
import userRoutes from './userRoutes';

const apiRouter: Router = Router();

apiRouter.use('/task', taskRoutes);
apiRouter.use('/status', statusRoutes);
apiRouter.use('/project', projectRoutes);
apiRouter.use('/comment', commentRoutes);
apiRouter.use('/auth', authRoutes);
apiRouter.use('/user', userRoutes);
apiRouter.use('/session', accountRoutes;
;
);
apiRouter.use('/account', sessionRoutes;
);

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
