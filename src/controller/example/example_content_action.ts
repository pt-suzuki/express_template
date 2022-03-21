import { Request, Response } from 'express';
import { ExampleService } from '~/domains/example/example_service';
import { ExamleTranslator } from '~/domains/example/example_translator';
import { ExampleContentResponder } from './example_content_responder';

export class ExampleContentAction {
  private responder: ExampleContentResponder;
  private service: ExampleService;
  private translator: ExamleTranslator;

  constructor(
    responder: ExampleContentResponder,
    service: ExampleService,
    translator: ExamleTranslator
  ) {
    this.responder = responder;
    this.service = service;
    this.translator = translator;
  }

  invoke(req: Request, res: Response): void {
    this.responder.invoke(
      this.service.content(this.translator.translateRequestToId(req)),
      res
    );
  }
}
