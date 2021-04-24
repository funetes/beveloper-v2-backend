import { Test, TestingModule } from '@nestjs/testing';
import { CreateLectureService } from './create-lecture.service';

describe('CreateLectureService', () => {
  let service: CreateLectureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateLectureService],
    }).compile();

    service = module.get<CreateLectureService>(CreateLectureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
