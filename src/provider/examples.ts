import { ExamleRepositoryImpl } from '~/domains/example/example_repository';
import { ExamleTranslatorImpl } from '~/domains/example/example_translator';
import { ExampleServiceImpl } from '../domains/example/example_service';

const exampleTranslator = new ExamleTranslatorImpl();
const exampleRepository = new ExamleRepositoryImpl(exampleTranslator);

const exampleService = new ExampleServiceImpl(
  exampleTranslator,
  exampleRepository
);

export { exampleService, exampleTranslator };
