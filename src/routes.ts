import { Application } from 'express';
import examplesRouter from './controller/example/router';

export default (app: Application): void => {
  app.use('/api/v1/examples', examplesRouter);
};
