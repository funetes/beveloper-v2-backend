import { Test, TestingModule } from '@nestjs/testing';
import { FetchCommentService } from './fetch-comment.service';

describe('FetchCommentService', () => {
  let service: FetchCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FetchCommentService],
    }).compile();

    service = module.get<FetchCommentService>(FetchCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
