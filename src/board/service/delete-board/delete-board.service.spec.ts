import { Test, TestingModule } from '@nestjs/testing';
import { DeleteBoardService } from './delete-board.service';

describe('DeleteBoardService', () => {
  let service: DeleteBoardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteBoardService],
    }).compile();

    service = module.get<DeleteBoardService>(DeleteBoardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
