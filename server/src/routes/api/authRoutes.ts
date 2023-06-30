import * as express from 'express';

import { googleContoller } from '../../controllers';

const router = express.Router();

router.post('/auth/apple', googleContoller.loginGoogle);

export default router;
