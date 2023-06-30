import * as express from 'express';
import { statusController } from '../../controllers';

const router = express.Router();

router.get('/', statusController.getAllStatuses);
// Add other route definitions for task operations

export default router;
