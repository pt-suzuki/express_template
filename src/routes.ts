import express from 'express';
import examplesRouter from './controller/example/router';

const router = express.Router();

router.use('/api/v1/examples', examplesRouter);

export default router;
