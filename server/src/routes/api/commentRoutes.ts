import express from 'express';
import { commentController } from '../../controllers';

const router = express.Router();

router.get('/', commentController.getAllComments);
// Add other route definitions for task operations

export default router;
