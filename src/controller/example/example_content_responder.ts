import { Response } from 'express';
import { Example } from '~/domains/example/example';
import * as logger from '~/helper/logger_helper';

export interface ExampleContentResponder {
  invoke(result: Promise<Example | null>, response: Response): void;
}

export class ExampleContentResponderImpl implements ExampleContentResponder {
  invoke(result: Promise<Example | null>, response: Response) {
    result
      .then((data) => {
        if (data) {
          response.send({ resultData: data });
          return;
        }
        response.status(204).end();
      })
      .catch((e) => {
        logger.error(e);
        response.status(500).send({
          message: 'Internal Server Error.',
        });
      });
  }
}
