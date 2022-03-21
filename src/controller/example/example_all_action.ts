import { Request, Response } from 'express';
import { ExampleService } from '~/domains/example/example_service';
import { ExamleTranslator } from '~/domains/example/example_translator';
import { ExampleAllResponder } from '~/controller/example/example_all_responder';

export class ExampleAllAction {
  private responder: ExampleAllResponder;
  private service: ExampleService;
  private translator: ExamleTranslator;

  constructor(
    responder: ExampleAllResponder,
    service: ExampleService,
    translator: ExamleTranslator
  ) {
    this.responder = responder;
    this.service = service;
    this.translator = translator;
  }

  invoke(_: Request, res: Response): void {
    this.responder.invoke(this.service.search(), res);
  }
}
