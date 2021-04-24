import { Test, TestingModule } from '@nestjs/testing';
import { FetchBoardService } from './fetch-board.service';

describe('FetchBoardService', () => {
  let service: FetchBoardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FetchBoardService],
    }).compile();

    service = module.get<FetchBoardService>(FetchBoardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
