import { Test, TestingModule } from '@nestjs/testing';
import { FetchLectureService } from './fetch-lecture.service';

describe('FetchLectureService', () => {
  let service: FetchLectureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FetchLectureService],
    }).compile();

    service = module.get<FetchLectureService>(FetchLectureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
