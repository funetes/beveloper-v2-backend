import { Test, TestingModule } from '@nestjs/testing';
import { DeleteLectureService } from './delete-lecture.service';

describe('DeleteLectureService', () => {
  let service: DeleteLectureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteLectureService],
    }).compile();

    service = module.get<DeleteLectureService>(DeleteLectureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
