import './config/env';
import { ExpressServer } from './server';

const server = new ExpressServer();

export default server.start();
