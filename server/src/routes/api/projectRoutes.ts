import * as express from 'express';
import { projectController } from '../../controllers';

const router = express.Router();

router.get('/', projectController.getAllProjects);
// Add other route definitions for task operations

export default router;
