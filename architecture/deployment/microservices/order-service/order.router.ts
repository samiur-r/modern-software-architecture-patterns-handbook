import { Router } from 'express';
import * as Controller from './order.controller';

const router = Router();
router.post('/', Controller.place);
router.get('/user/:userId', Controller.getByUser);
export default router;