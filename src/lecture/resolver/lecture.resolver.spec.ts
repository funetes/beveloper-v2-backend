import { Test, TestingModule } from '@nestjs/testing';
import { LectureResolver } from './lecture.resolver';

describe('LectureResolver', () => {
  let resolver: LectureResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LectureResolver],
    }).compile();

    resolver = module.get<LectureResolver>(LectureResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
