import { Response } from 'express';
import { Example } from '~/domains/example/example';
import * as logger from '~/helper/logger_helper';

export interface ExampleAllResponder {
  invoke(result: Promise<Example[]>, response: Response): void;
}

export class ExampleAllResponderImpl implements ExampleAllResponder {
  invoke(result: Promise<Example[]>, response: Response) {
    result
      .then((data) => {
        response.send({ resultData: data });
      })
      .catch((e) => {
        logger.error(e);
        response.status(500).send({
          message: 'Internal Server Error.',
        });
      });
  }
}
