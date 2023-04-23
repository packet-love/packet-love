import { ChatgptController } from './controller';
import { Router } from 'express';

const router = Router();
router.get('/', ChatgptController.create);

export default router;