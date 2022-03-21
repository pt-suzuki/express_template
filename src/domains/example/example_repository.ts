import { Example } from './example';
import { ExamleTranslator } from './example_translator';

let id = 0;

const examples: Example[] = [
  { id: id++, name: 'example 0' },
  { id: id++, name: 'example 1' },
];

export interface ExamleRepository {
  search(): Promise<Example[]>;
  content(id: number): Promise<Example>;
  create(content: Example): Promise<Example>;
}

export class ExamleRepositoryImpl implements ExamleRepository {
  private translator: ExamleTranslator;

  constructor(translator: ExamleTranslator) {
    this.translator = translator;
  }

  search(): Promise<Example[]> {
    return Promise.resolve(examples);
  }

  content(id: number): Promise<Example> {
    return this.search().then((r) => r[id]);
  }

  create(content: Example): Promise<Example> {
    content.id = id++;
    examples.push(content);
    return Promise.resolve(content);
  }
}
