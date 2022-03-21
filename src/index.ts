import './config/env';
import Server from './server';
import routes from './routes';

export default new Server().router(routes).start();
