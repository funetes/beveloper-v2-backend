import { Test, TestingModule } from '@nestjs/testing';
import { FetchVideoService } from './fetch-video.service';

describe('FetchVideoService', () => {
  let service: FetchVideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FetchVideoService],
    }).compile();

    service = module.get<FetchVideoService>(FetchVideoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
