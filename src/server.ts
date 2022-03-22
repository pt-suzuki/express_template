import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import os from 'os';
import cookieParser from 'cookie-parser';
import * as l from '~/helper/logger_helper';

import { errorHandler } from '~/middlewares/error_handler';
import * as OpenApiValidator from 'express-openapi-validator';
import * as core from 'express-serve-static-core';
import router from './routes';

export class ExpressServer {
  private app: core.Express;

  constructor() {
    this.initApp();
    this.setSwaggerRoter();
    this.setRoter();
  }

  public start() {
    const port = parseInt(process.env.PORT ?? '30000');
    http.createServer(this.app).listen(port, () => {
      l.info(
        `up and running in ${
          process.env.NODE_ENV || 'development'
        } @: ${os.hostname()} on port: ${port}}`
      );
    });
  }

  public getInstance() {
    return this.app;
  }

  private initApp() {
    this.app = express();
    this.app.use(cookieParser(process.env.SESSION_SECRET));
    this.app.use(errorHandler);
    this.app.use(
      bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' })
    );
    this.app.use(
      bodyParser.text({ limit: process.env.REQUEST_LIMIT || '100kb' })
    );
    this.app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || '100kb',
      })
    );
  }

  private setRoter() {
    this.app.use(router);
  }

  private setSwaggerRoter() {
    const root = path.normalize(__dirname + '/..');
    this.app.use(express.static(`${root}/public`));

    const apiSpec = path.join(__dirname, '../api.yml');
    const validateResponses = !!(
      process.env.OPENAPI_ENABLE_RESPONSE_VALIDATION &&
      process.env.OPENAPI_ENABLE_RESPONSE_VALIDATION.toLowerCase() === 'true'
    );
    this.app.use(process.env.OPENAPI_SPEC || '/spec', express.static(apiSpec));
    this.app.use(
      OpenApiValidator.middleware({
        apiSpec,
        validateResponses,
        ignorePaths: /.*\/spec(\/|$)/,
      })
    );
  }
}
