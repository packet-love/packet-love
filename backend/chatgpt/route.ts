import { ChatgptController } from './controller';
import { Router } from 'express';

const router = Router();
const chatgptController = new ChatgptController();
router.post('/', chatgptController.create);
router.post('/analyze', chatgptController.analyze);
router.post('/improvement', chatgptController.improvement);

export default router;