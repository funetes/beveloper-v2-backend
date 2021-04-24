import { Test, TestingModule } from '@nestjs/testing';
import { UpdateLectureService } from './update-lecture.service';

describe('UpdateLectureService', () => {
  let service: UpdateLectureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateLectureService],
    }).compile();

    service = module.get<UpdateLectureService>(UpdateLectureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
