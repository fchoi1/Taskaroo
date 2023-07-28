import express from 'express';

import { authController } from '../../controllers';

const router = express.Router();

router.post('/link', authController.linkAccount);
router.delete('/unlink/:providerAccountId?', authController.unlinkAccount);

export default router;
