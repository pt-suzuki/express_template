import { Request, Response } from 'express';
import { ExampleService } from '~/domains/example/example_service';
import { ExamleTranslator } from '~/domains/example/example_translator';
import { ExampleCreateResponder } from './example_create_responder';

export class ExampleCreateAction {
  private responder: ExampleCreateResponder;
  private service: ExampleService;
  private translator: ExamleTranslator;

  constructor(
    responder: ExampleCreateResponder,
    service: ExampleService,
    translator: ExamleTranslator
  ) {
    this.responder = responder;
    this.service = service;
    this.translator = translator;
  }

  invoke(req: Request, res: Response): void {
    this.responder.invoke(
      this.service.create(this.translator.translateRequestToContent(req)),
      res
    );
  }
}
