import { ChatgptController } from './controller';
import { Router } from 'express';

const router = Router();
const chatgptController = new ChatgptController();
router.post('/', chatgptController.create);

export default router;