import { Test, TestingModule } from '@nestjs/testing';
import { UpdateBoardService } from './update-board.service';

describe('UpdateBoardService', () => {
  let service: UpdateBoardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateBoardService],
    }).compile();

    service = module.get<UpdateBoardService>(UpdateBoardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
