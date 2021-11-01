import { Router } from 'express';
import api from './controllers/index.js';

const router = Router();

router.use('/api', api);

export default router;
