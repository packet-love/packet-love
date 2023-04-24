import { ChatgptController } from './controller';
import { Router } from 'express';

const router = Router();
router.post('/', ChatgptController.create);

export default router;