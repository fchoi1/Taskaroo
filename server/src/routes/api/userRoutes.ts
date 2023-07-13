import express from 'express';
import { userController } from '../../controllers';

const router = express.Router();

router.get('/', userController.getUser);
router.get('/:id', userController.getUserbyId);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/', userController.deleteUser);

// Add other route definitions for task operations

export default router;
