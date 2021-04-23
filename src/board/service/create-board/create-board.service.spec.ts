import { Test, TestingModule } from '@nestjs/testing';
import { CreateBoardService } from './create-board.service';

describe('CreateBoardService', () => {
  let service: CreateBoardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateBoardService],
    }).compile();

    service = module.get<CreateBoardService>(CreateBoardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
