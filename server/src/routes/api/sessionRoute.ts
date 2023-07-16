import express from 'express';

import { authController } from '../../controllers';

const router = express.Router();

router.post('/', authController.updateSession);
router.get('/:sessionToken?', authController.getSession);
router.put('/:sessionToken', authController.updateSession);
router.delete('/:sessionToken?', authController.deleteSession);




export default router;
