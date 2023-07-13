import express from 'express';
import { taskController } from '../../controllers';

const router = express.Router();

router.get('/', taskController.getAllTasks);
// Add other route definitions for task operations

export default router;
