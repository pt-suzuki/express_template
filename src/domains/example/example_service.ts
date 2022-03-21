import * as L from '~/helper/logger_helper';
import { Example } from './example';
import { ExamleRepository } from './example_repository';
import { ExamleTranslator } from './example_translator';

export interface ExampleService {
  search(): Promise<Example[]>;
  content(id: number): Promise<Example>;
  create(content: Example): Promise<Example>;
}

export class ExampleServiceImpl {
  private translator: ExamleTranslator;
  private repository: ExamleRepository;

  constructor(translator: ExamleTranslator, repository: ExamleRepository) {
    this.translator = translator;
    this.repository = repository;
  }

  search(): Promise<Example[]> {
    L.info('fetch all examples');
    return this.repository.search();
  }

  content(id: number): Promise<Example> {
    L.info(`fetch example with id ${id}`);
    return this.repository.content(id);
  }

  create(content: Example): Promise<Example> {
    L.info(`create example with name ${content.name}`);
    return this.repository.create(content);
  }
}
