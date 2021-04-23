import { Test, TestingModule } from '@nestjs/testing';
import { FilemanagerResolver } from './filemanager.resolver';

describe('FilemanagerResolver', () => {
  let resolver: FilemanagerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilemanagerResolver],
    }).compile();

    resolver = module.get<FilemanagerResolver>(FilemanagerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
