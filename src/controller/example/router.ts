import express, { Request, Response } from 'express';
import { ExampleAllAction } from './example_all_action';
import { ExampleCreateAction } from './example_create_action';
import { ExampleCreateResponderImpl } from './example_create_responder';
import { exampleService, exampleTranslator } from '~/provider';
import { ExampleAllResponderImpl } from './example_all_responder';
import { ExampleContentAction } from './example_content_action';
import { ExampleContentResponderImpl } from './example_content_responder';

const all = new ExampleAllAction(
  new ExampleAllResponderImpl(),
  exampleService,
  exampleTranslator
);

const create = new ExampleCreateAction(
  new ExampleCreateResponderImpl(),
  exampleService,
  exampleTranslator
);

const content = new ExampleContentAction(
  new ExampleContentResponderImpl(),
  exampleService,
  exampleTranslator
);

export default express
  .Router()
  .post('/', async (req: Request, res: Response) => create.invoke(req, res))
  .get('/', async (req: Request, res: Response) => all.invoke(req, res))
  .get('/:id', async (req: Request, res: Response) => content.invoke(req, res));
