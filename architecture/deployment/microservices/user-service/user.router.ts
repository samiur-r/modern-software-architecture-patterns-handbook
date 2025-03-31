import { Router } from 'express';
import * as Controller from './user.controller';

const router = Router();
router.post('/', Controller.register);
router.get('/:id', Controller.getById);
export default router;