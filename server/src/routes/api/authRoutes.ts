import express from 'express';

import { authController } from '../../controllers';

const router = express.Router();

router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/register', authController.register);



export default router;
