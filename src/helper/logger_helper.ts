import pino from 'pino';

const l = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL || 'debug',
});

const error = <T>(args: T) => {
  l.error('error', args);
};

const info = <T>(args: T) => {
  l.info(args);
};

const warn = <T>(args: T) => {
  l.warn(args);
};

export { error, info, warn };
