import { Response } from 'express';
import { Example } from '~/domains/example/example';
import { error } from '~/helper/logger_helper';

export interface ExampleCreateResponder {
  invoke(result: Promise<Example | null>, response: Response): void;
}

export class ExampleCreateResponderImpl implements ExampleCreateResponder {
  invoke(result: Promise<Example | null>, response: Response) {
    result
      .then((data) => {
        response.status(201).send({ resultData: data });
      })
      .catch((e) => {
        error(e);
        response.status(500).send({
          message: 'Internal Server Error.',
        });
      });
  }
}
