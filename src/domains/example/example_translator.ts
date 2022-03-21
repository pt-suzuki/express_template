import { Request } from 'express';
import { Example } from './example';

export interface ExamleTranslator {
  translateRequestToContent(req: Request): Example;
  translateRequestToId(request: Request): number;
}

export class ExamleTranslatorImpl implements ExamleTranslator {
  translateRequestToContent(req: Request): Example {
    return {
      name: req.body.name,
    };
  }

  translateRequestToId(req: Request): number {
    return Number.parseInt(req.params['id']);
  }
}
